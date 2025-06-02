// interface
import { Product } from "@/interfaces";
import Image from "next/image";
import Link from "next/link";

interface Props {
  product: Product;
};

export const ProductGridItem = ({ product }: Props) => {
  console.log(product.images[0]);
  return (
    <div className="rounded-md overflow-hidden fade-in">
      <Image
        src={product.images[0]}
        alt={product.title}
        className="w-full object-cover"
        width={500}
        height={500}
      />

      <div className="p-4 flex flex-col">
        <Link
          href={product.slug}
        >
          {product.title}
        </Link>
        <span className="font-bold">{product.price}</span>
      </div>
    </div>
  )
};
