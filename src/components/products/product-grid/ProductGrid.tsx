// Components
import { ProductGridItem } from "./ProductGridItem";

// Types
import { Product } from "@/interfaces";

interface Props {
  products: Product[];
};

export const ProductGrid = ({ products }: Props) => {
  console.log("products", products);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 mb-10">
      {
        products.map(product => (
          <ProductGridItem
            key={product.slug}
            product={product}
          />
        ))
      }
    </div>
  );
};
