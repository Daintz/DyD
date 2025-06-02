'use client';

import Link from "next/link";

// Icons
import { IoSearchOutline, IoCartOutline } from "react-icons/io5"

// Fonts
import { inter } from "@/config/fonts";

// Store
import { useUIStore } from "@/store";

export const TopMenu = () => {
  const openSideMenu = useUIStore(state => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">

      {/* Logo */}
      <div>
        <Link
          href="/"
        >
        <span className={`${inter.className} antialiased font-bold`}>D&D</span>
        <span> | Gadgets</span>
        </Link>
      </div>

      {/* Center Menu */}
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-palet-orange"
          href="/category/products"
        >
          Productos
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-palet-orange"
          href="/category/airpods"
        >
          AirPods
        </Link>
      </div>

      {/* Search, Cart, Menu */}
      <div className="flex items-center">
        <Link
          className="mx-2"
          href="/search"
        >
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <Link
          className="mx-2"
          href="/cart"
        >
          <div className="relative">
            <span className="absolute text-xs px-1 rounded-full font-bold -top-2 -right-2 bg-palet-orange text-white">
              3
            </span>
            <IoCartOutline className="w-5 h-5" />
          </div>
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-palet-orange"
          onClick={() => openSideMenu()}
        >
          Menú
        </button>

      </div>

    </nav>
  );
};