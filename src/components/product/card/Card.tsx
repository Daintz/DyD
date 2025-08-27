
import Image from "next/image";

// Types
import type { Product } from "@/interfaces";
import { formatToCOP } from "@/utils";

type Props = {
  product: Product
};

export const ProductCard = ({ product }: Props) => {
  return (
    <div className="relative rounded-xl shadow-md hover:shadow-lg transition group p-3">
      <div className="relative">
        <Image
          src={product.images[2]}
          alt={product.title}
          width={2000}
          height={2000}
          className="rounded-lg object-cover"
        />
      </div>

      <h3 className="mt-3 text-sm font-medium line-clamp-2">{product.title}</h3>

      <div className="mt-1">
        <span className="text-palet-orange font-bold">
          {formatToCOP(product.priceInOffer)}
        </span>
        <span className="ml-2 text-gray-400 line-through textsm">
          {formatToCOP(product.price)}
        </span>
      </div>
    </div>
  );
};
