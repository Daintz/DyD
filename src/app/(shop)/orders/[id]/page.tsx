// import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

// Components
import { Title } from "@/components";

// Seed
import { initialData } from "@/seed/seed";

// Utils
import { formatToCOP } from "@/utils";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

interface Params {
  id: string;
};

interface Props {
  params: Promise<Params>
};

export default async function OrderPage({ params }: Props) {
  const { id } = await params;

  // redirect(/)
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title
          title={`Orden  #${id}`}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          <div className="flex flex-col mt-5">
            <div className={
              clsx(
                "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                {
                  'bg-red-500': false,
                  'bg-green-700': true,
                }
              )
            }>
              <IoCardOutline size={30} />
              {/* <span className="mx-2">Pendiente</span> */}
              <span className="mx-2">Pagada</span>
            </div>

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
                    <p>{formatToCOP(product.price)} x 3</p>
                    <p className="font-bold">Subtotal: {formatToCOP(product.price * 3)}</p>

                    <button className="underline mt-3">
                      Eliminar
                    </button>
                  </div>
                </div>
              ))
            }
          </div>

          <div className="bg-palet-found-black rounded-xl shadow-xl p-7">
            <h2 className="text-2xl mb-2">Direccion de entrega</h2>
            <div className="mb-10">
              <p className="text-xl">Daniel Lopez</p>
              <p>Calle 00 #00-00</p>
              <p>Centro</p>
              <p>050001</p>
              <p>Rejas negras</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-10" />

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
              <div className={
                clsx(
                  "flex items-center rounded-lg py-2 px-3.5 text-xs font-bold text-white mb-5",
                  {
                    'bg-red-500': false,
                    'bg-green-700': true,
                  }
                )
              }>
                <IoCardOutline size={30} />
                {/* <span className="mx-2">Pendiente</span> */}
                <span className="mx-2">Pagada</span>
              </div>

              {/* <Link
                className="flex btn-primary justify-center"
                href="orders/123"
              >
                Ordenar
              </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};