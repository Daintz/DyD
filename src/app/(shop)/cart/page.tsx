import Link from "next/link";
import Image from "next/image";
// import { redirect } from "next/navigation";

// Components
import { QuantitySelector, Title } from "@/components";

// Seed
import { initialData } from "@/seed/seed";

// Utils
import { formatToCOP } from "@/utils";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

export default function CartPage() {

  // redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title
          title="Carrito"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <span className="text-xl">Agregar más items</span>
            <Link
              href={"/"}
              className="underline mb-5"
            >
              Continúa comprando
            </Link>

            {
              productsInCart.map(product => (
                <div
                  className="flex mb-5"
                  key={product.slug}
                >
                  <Image
                    src={product.images[0]}
                    width={100}
                    height={100}
                    style={{
                      width: "100px",
                      height: "100px"
                    }}
                    alt={product.title}
                    className="mr-5 rounded"
                  />

                  <div>
                    <p>{product.title}</p>
                    <p>{formatToCOP(product.price)}</p>

                    <QuantitySelector quantity={3} />

                    <button className="underline mt-3">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="bg-palet-found-black rounded-xl shadow-xl p-7 h-fit">
            <h2 className="text-2xl mb-2">Resumen de orden</h2>

            <div className="grid grid-cols-2">
              <span>No. Productos</span>
              <span className="text-right">3 Articulos</span>

              <span>Subtotal</span>
              <span className="text-right">{formatToCOP(209997)}</span>

              <span>Total</span>
              <span className="text-right">{formatToCOP(209997)}</span>
            </div>

            <div className="mt-5 mb-2 w-full">
              <Link
                className="flex btn-primary justify-center"
                href="checkout/address"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};