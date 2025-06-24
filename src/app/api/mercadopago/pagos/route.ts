
import { NextRequest, NextResponse } from 'next/server';
import { MercadoPagoConfig, Payment } from 'mercadopago';

// Actions
import { setTransactionId } from '@/actions';

// Libraries
import prisma from '@/lib/prisma';

const mercadopago = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN!,
});

export async function POST(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const topic = searchParams.get('topic');
  const paymentId = searchParams.get('id');

  console.log('📥 Webhook recibido');
  console.log('🔍 Tipo:', topic);
  console.log('🔍 ID del pago:', paymentId);

  if (topic !== 'payment' || !paymentId) {
    console.warn('⚠️ Webhook sin parámetros válidos:', searchParams.toString());
    return NextResponse.json({ error: 'Evento no válido' }, { status: 400 });
  };

  try {
    const payment = await safeGetPayment(paymentId);

    console.log('✅ Detalles del pago:');
    console.log('🆔 ID:', payment.id);
    console.log('💰 Monto:', payment.transaction_amount);
    console.log('📧 Email:', payment.payer?.email);
    console.log('📦 Estado:', payment.status);

    if (payment.status === 'approved') {
      // Obtener el orderId desde metadata
      const orderId = payment.metadata?.orderId;
      if (orderId) {
        // Idempotencia: verificar si la orden ya tiene este transactionId
        const order = await prisma.order.findUnique({ where: { id: orderId } });
        if (order?.transactionId === payment.id) {
          console.log('ℹ️ Orden ya procesada con este transactionId, no se repite la acción.');
        } else {
          const result = await setTransactionId(orderId, payment.id);
          if (!result.ok) {
            console.error('❌ Error al actualizar la orden:', result.message);
          } else {
            console.log('✅ Orden actualizada con transactionId:', payment.id);
          }
        }
      } else {
        console.warn('⚠️ No se encontró orderId en metadata del pago');
      }
    } else {
      console.log('ℹ️ Pago recibido pero no aprobado:', payment.status);
    }

    return NextResponse.json({ received: true });
  } catch (error: any) {
    console.error('❌ Error al consultar el pago:', error);
    return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
  };
};

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
      };
    };
  };
  throw new Error(`No se pudo obtener el pago ${paymentId} después de ${retries} intentos`);
};
