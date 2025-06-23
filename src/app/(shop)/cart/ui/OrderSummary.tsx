"use client";

import { useEffect, useState } from "react";
import { useShallow } from "zustand/shallow";

// Utils
import { formatToCOP } from "@/utils";
import { useCartStore } from "@/store";

const OrderSummary = () => {
  const [loaded, setLoaded] = useState(false);

  const { itemsInCart, subTotal, total } = useCartStore(useShallow((state) => state.getSummaryInformation()));

  useEffect(() => {
    setLoaded(true);
  }, []);

  if (!loaded) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-2">
      <span>No. Productos</span>
      <span className="text-right">{itemsInCart === 1 ? "1 producto" : `${itemsInCart} productos`}</span>

      <span>Subtotal</span>
      <span className="text-right">{formatToCOP(subTotal)}</span>

      <span>Total</span>
      <span className="text-right">{formatToCOP(total)}</span>
    </div>
  );
};

export default OrderSummary;