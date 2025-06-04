import { Title } from '@/components';

import Link from 'next/link';
import { IoCardOutline } from 'react-icons/io5';

export default function OrdersPage() {
  return (
    <>
      <Title title="Orders" />

      <div className="mb-10">
        <table className="min-w-full">
          <thead className="bg-palet-found-black border-b border-palet-found-black">
            <tr>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                #ID
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Nombre completo
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Estado
              </th>
              <th scope="col" className="text-sm font-medium text-white px-6 py-4 text-left">
                Opciones
              </th>
            </tr>
          </thead>
          <tbody>

            <tr className="bg-palet-black border-b border-palet-found-black transition duration-300 ease-in-out hover:bg-palet-found-black">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">1</td>
              <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-white font-light px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-green-800" />
                <span className='mx-2 text-green-800'>Pagada</span>

              </td>
              <td className="text-sm text-white font-light px-6 ">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>

            </tr>

            <tr className="bg-palet-black border-b border-palet-found-black transition duration-300 ease-in-out hover:bg-palet-found-black">

              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">1</td>
              <td className="text-sm text-white font-light px-6 py-4 whitespace-nowrap">
                Mark
              </td>
              <td className="flex items-center text-sm  text-white font-light px-6 py-4 whitespace-nowrap">

                <IoCardOutline className="text-red-800" />
                <span className='mx-2 text-red-800'>No Pagada</span>

              </td>
              <td className="text-sm text-white font-light px-6 ">
                <Link href="/orders/123" className="hover:underline">
                  Ver orden
                </Link>
              </td>

            </tr>

          </tbody>
        </table>
      </div>
    </>
  );
};