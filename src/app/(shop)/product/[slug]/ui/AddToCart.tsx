"use client";

import crypto from "crypto";
import { useState } from "react";

// Components
import { QuantitySelector } from "@/components";
import { ViewerCount } from "./ViewerCount";
import { StarRating } from "./StarRating";

// Interfaces
import { CartProduct, Product } from "@/interfaces";

// Store
import { useCartStore } from "@/store";

// Utils
import { fbq } from "@/utils/fbpixel";

interface Props {
  product: Product;
};

function getCookie(name: string) {
  if (typeof document === "undefined") return undefined;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? decodeURIComponent(match[2]) : undefined;
}

const AddToCart = ({ product }: Props) => {
  const addProductToCar = useCartStore(state => state.addProductToCart);

  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = async () => {
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[2],
      contentId: product.contentId,
      inStock: product.inStock
    };

    addProductToCar(cartProduct);

    const eventId = crypto.randomUUID();
  const url = window.location.href;

    // 🔹 Google Analytics 4
    (window as any).gtag?.("event", "add_to_cart", {
      currency: "COP",
      value: product.price * quantity,
      items: [
        {
          item_id: product.id,
          item_name: product.title,
          item_brand: "Mi Marca",
          price: product.price,
          quantity: quantity,
        },
      ],
    });

    // 🔹 Meta Pixel
    fbq("track", "AddToCart", {
      content_ids: [product.id],
      content_name: product.title,
      content_type: "product",
      value: product.price * quantity,
      currency: "COP",
      quantity: quantity,
    }, {eventID: eventId});

    // 🔹 CAPI (servidor)
    await fetch("/api/meta/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_name: "AddToCart",
        event_id: eventId, // 👈 mismo ID que arriba
        event_source_url: url,
        custom_data: {
          value: product.price * quantity,
          currency: "COP",
          content_type: "product",
          content_ids: [product.contentId],
          quantity,
        },
        fbp: getCookie("_fbp"),
        fbc: getCookie("_fbc"),
        // opcional: email, phone, external_id si el usuario está logueado
      }),
    });

    setQuantity(1);
  };

  return (
    <>
      <StarRating value={4.8} totalRatings={18} readOnly />
      <ViewerCount min={3} max={8} refreshMs={15000} />

      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        inStock={product.inStock}
      />

      <button
        className="btn-primary my-5 py-1 px-3 text-[0.79rem]"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default AddToCart;