"use client";

import { useState } from "react";

// Components
import { QuantitySelector } from "@/components";

// Interfaces
import { CartProduct, Product } from "@/interfaces";

// Store
import { useCartStore } from "@/store";

interface Props {
  product: Product;
};

const AddToCart = ({ product }: Props) => {
  const addProductToCar = useCartStore(state => state.addProductToCart);

  const [quantity, setQuantity] = useState<number>(1);

  console.log("product", product);

  const addToCart = () => {
    const cartProduct: CartProduct = {
      id: product.id,
      slug: product.slug,
      title: product.title,
      price: product.price,
      quantity: quantity,
      image: product.images[0],
      inStock: product.inStock
    };

    addProductToCar(cartProduct);
    setQuantity(1);
  };

  return (
    <>
      <QuantitySelector
        quantity={quantity}
        onQuantityChanged={setQuantity}
        inStock={product.inStock}
      />

      <button
        className="btn-primary my-5"
        onClick={addToCart}
      >
        Agregar al carrito
      </button>
    </>
  );
};

export default AddToCart;