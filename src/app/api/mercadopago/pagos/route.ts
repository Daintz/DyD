import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment, MerchantOrder } from 'mercadopago';
import { setTransactionId } from '@/actions';
import prisma from '@/lib/prisma';

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const topic = searchParams.get('topic');
  const resourceId = searchParams.get('id');

  console.log('📥 Webhook recibido');
  console.log('🔍 Tipo:', topic);
  console.log('🔍 ID:', resourceId);

  if (!topic || !resourceId) {
    console.warn('⚠️ Webhook sin parámetros válidos:', searchParams.toString());
    return NextResponse.json({ error: 'Evento no válido' }, { status: 400 });
  }

  try {
    if (topic === 'payment') {
      const payment = await safeGetPayment(resourceId);
      await handleApprovedPayment(payment);
    }

    else if (topic === 'merchant_order') {
      const id = Number(resourceId);
      if (isNaN(id)) {
        console.warn('⚠️ ID inválido recibido para merchant_order');
        return NextResponse.json({ error: 'ID inválido' }, { status: 400 });
      }

      let merchantOrder = null;

      try {
        merchantOrder = await new MerchantOrder(mercadopago).get({ id } as any);
      } catch (err: any) {
        if (err.status === 400 && err.message?.includes('Invalid Id')) {
          console.warn('⚠️ El ID recibido no corresponde a una orden. Intentando como payment...');
          // intentar como pago directamente
          const fullPayment = await safeGetPayment(id.toString());
          await handleApprovedPayment(fullPayment);
          return NextResponse.json({ received: true });
        } else {
          throw err;
        }
      }

      const approvedPayment = merchantOrder.payments?.find((p) => p.status === 'approved');

      if (!approvedPayment?.id) {
        console.log('ℹ️ merchant_order sin pagos aprobados.');
        return NextResponse.json({ received: true });
      }

      const fullPayment = await safeGetPayment(approvedPayment.id.toString());
      await handleApprovedPayment(fullPayment);
    } else {
      console.warn('⚠️ Topic no manejado:', topic);
      return NextResponse.json({ error: 'Topic no manejado' }, { status: 400 });
    }

    return NextResponse.json({ received: true });

  } catch (error: any) {
    console.error('❌ Error al procesar webhook:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  }
}

async function handleApprovedPayment(payment: any) {
  console.log('✅ Detalles del pago:');
  console.log('🆔 ID:', payment.id);
  console.log('💰 Monto:', payment.transaction_amount);
  console.log('📧 Email:', payment.payer?.email);
  console.log('📦 Estado:', payment.status);

  if (payment.status !== 'approved') {
    console.log('ℹ️ Pago recibido pero no aprobado:', payment.status);
    return;
  }

  const orderId = payment.metadata?.orderId;
  if (!orderId) {
    console.warn('⚠️ No se encontró orderId en metadata del pago');
    return;
  }

  const order = await prisma.order.findUnique({ where: { id: orderId } });

  if (order?.transactionId === payment.id) {
    console.log('ℹ️ Orden ya procesada con este transactionId, no se repite la acción.');
    return;
  }

  const result = await setTransactionId(orderId, payment.id);
  if (!result.ok) {
    console.error('❌ Error al actualizar la orden:', result.message);
  } else {
    console.log('✅ Orden actualizada con transactionId:', payment.id);
  }
}

async function safeGetPayment(paymentId: string, retries = 3, delay = 1500): Promise<any> {
  for (let i = 0; i < retries; i++) {
    try {
      const payment = await new Payment(mercadopago).get({ id: paymentId });
      return payment;
    } catch (err: any) {
      if (err.status === 404 && i < retries - 1) {
        console.log(`⌛ Reintentando (${i + 1}/${retries})...`);
        await new Promise((resolve) => setTimeout(resolve, delay));
      } else {
        throw err;
      }
    }
  }
  throw new Error(`No se pudo obtener el pago ${paymentId} después de ${retries} intentos`);
}
