"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export const PurchasePopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);

    const timer = setTimeout(() => setVisible(false), 6000);
    return () => clearTimeout(timer);
  }, [])

  return (
    <div
      className={`fixed bottom-0 left-5 max-w-xs w-[300px] bg-white shadow-lg rounded-xl border p-3 flex gap-3 items-start transition-all duration-500 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"}`}
    >
      <Image
        src={"/favicon.ico"}
        alt="D&D"
        width={50}
        height={50}
        className="rounded-md object-cover"
      />

      <div className="flex-1 text-sm">
        <p className="text-gray-700 font-medium">
          asdasdasdsa <span className="text-gray-500">Medellín</span> compró
        </p>
        <p  className="font-semibold text-gray-900 line-clamp-2">Airpods</p>
        <div className ="flex items-center gap-2 text-xs text-gray-500 mt-1">
          14/25/2025
          Verificado
        </div>
      </div>
    </div>
  );
};
