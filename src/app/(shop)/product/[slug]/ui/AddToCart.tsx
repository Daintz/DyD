"use client";

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

const AddToCart = ({ product }: Props) => {
  const addProductToCar = useCartStore(state => state.addProductToCart);

  const [quantity, setQuantity] = useState<number>(1);

  const addToCart = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[2],
      inStock: product.inStock
    };

    addProductToCar(cartProduct);

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