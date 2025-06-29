"use client";

import { useActionState, useEffect } from "react";
import Link from "next/link";
import clsx from "clsx";

// Components
import { If } from "@/components";

// Actions
import { authenticate } from "@/actions";

// Icons
import { IoInformationOutline } from "react-icons/io5";

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);

  useEffect(() => {
    if (errorMessage === "Sucess") {
      window.location.replace("/");
    };
  }, [errorMessage]);

  return (
    <form action={formAction} className="flex flex-col">
      <label htmlFor="email">Correo electrónico</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5 text-palet-black"
        type="email"
        name="email"
        />

      <label htmlFor="email">Contraseña</label>
      <input
        className="px-5 py-2 border bg-gray-200 rounded mb-5 text-palet-black"
        type="password"
        name="password"
      />

      <div
        className="flex h-8 items-end space-x-1"
        aria-live="polite"
        aria-atomic="true"
      >
        <If condition={errorMessage}>
          <IoInformationOutline className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
        </If>
      </div>

      <button
        type="submit"
        className={
          clsx({
            "btn-primary": !isPending,
            "btn-disabled": isPending
          })
        }
        disabled={isPending}
        name="redirectTo"
      >
        Ingresar
      </button>


      {/* divisor l ine */ }
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/new-account"
        className="btn-secondary text-center">
        Crear una nueva cuenta
      </Link>
    </form>
  );
};

export default LoginForm;