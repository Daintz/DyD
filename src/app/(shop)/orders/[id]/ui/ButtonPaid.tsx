'use client';

import { useState } from 'react';
import clsx from 'clsx';

// Components
import { submitMessage } from '../submitMessage';
import { If } from '@/components';

// Icons
import { IoCardOutline } from 'react-icons/io5';
import { SiMercadopago } from "react-icons/si";

interface Props {
  title: string,
  id: string,
  total: number,
  isPaid: boolean,
  buyerEmail: string
};

export const ButtonPaid = ({ title, id, total, isPaid, buyerEmail }: Props) => {
  const [loading, setLoading] = useState(false);

  console.log("isPaid", isPaid);
  console.log("buyerEmail", buyerEmail);

  const handleCheckout = async () => {
    setLoading(true);
    const url = await submitMessage(title, id, total);
    window.open(url, "_blank");
    setLoading(false);
  };

  return (
    <>
      <If condition={loading}>
        <div className="animate-pulse mb-4">
          <div className="h-8 bg-gray-300 rounded" />
        </div>

        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded" />
        </div>
      </If>

      <If condition={!loading}>
        <button
          onClick={handleCheckout}
          className="flex items-center gap-1.5 justify-center bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-3 rounded-lg mb-4 w-full transition duration-200 cursor-pointer h-12"
        >
          <SiMercadopago color="black" size={40} />
          <span className="text-base font-medium">Pagar con Mercado Pago</span>
        </button>

        <div className={
          clsx(
            "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
            {
              'bg-red-500': !isPaid,
              'bg-green-700': isPaid,
            }
          )
        }>
          <IoCardOutline size={30} />
          {/* <span className="mx-2">Pendiente</span> */}
          <span className="mx-2">
            {
              isPaid ? "Pagada" : "No pagada"
            }
          </span>
        </div>
      </If>
    </>
  );
};
