'use client';

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// interface
import { Product } from "@/interfaces";

interface Props {
  product: Product;
};

export const ProductGridItem = ({ product }: Props) => {
  const [displayImage, setDisplayImage] = useState(product.images[0]);

  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Link
        href={`/product/${product.slug}`}
      >
        <Image
          src={displayImage}
          alt={product.title}
          className="w-full overflow-hidden rounded h-100"
          width={2000}
          height={2000}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(product.images[0])}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link
          className="hover:text-palet-orange"
          href={`/product/${product.slug}`}
        >
          {product.title}
        </Link>
        <span className="font-bold">{product.price}</span>
      </div>
    </div>
  )
};
