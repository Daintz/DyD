"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";

// Components
import { If, PopupMessage } from "@/components";

// Actions
import { authenticate } from "@/actions";

const LoginForm = () => {
  const [errorMessage, formAction, isPending] = useActionState(authenticate, undefined);
  const [showPopup, setShowPopup] = useState(false);

  const showMessage = () => {
    console.log("errorMessage", errorMessage)
    if (errorMessage && errorMessage !== "Sucess") {
      setShowPopup(true);
      setTimeout(() => {
        setShowPopup(false);
      }, 3000);
    };
    if (errorMessage === "Sucess") window.location.replace("/");
  };

  useEffect(() => {
    showMessage();
  }, [errorMessage]);

  return (
    <>
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

        <button
          type="submit"
          className={
            clsx({
              "btn-primary": !isPending,
              "btn-disabled": isPending
            })
          }
          disabled={isPending}
          onClick={() => showMessage()}
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

      {showPopup && errorMessage && (
        <PopupMessage
          title="Error al iniciar sesión"
          message={errorMessage === "Invalid credentials." ? "Datos incorrectos." : errorMessage}
          onClose={() => setShowPopup(false)}
        />
      )}
    </>
  );
};

export default LoginForm;
