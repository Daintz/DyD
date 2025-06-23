"use client";

import clsx from "clsx";
import Link from "next/link";
import { SubmitHandler, useForm } from "react-hook-form";

// Actions
import { login, registerUser } from "@/actions";
import { useState } from "react";

interface FormInputs {
  name: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  const [, setErrorMessage] = useState("");
  const { register, handleSubmit, formState: {errors} } = useForm<FormInputs>();

  const onSubmit: SubmitHandler<FormInputs> = async(data) => {
    setErrorMessage("");
    const {name, email, password} = data;

    const resp = await registerUser(name, email, password);

    if (!resp.ok) {
      setErrorMessage(resp.message);
      return;
    };

    await login(email.toLowerCase(), password);
    window.location.replace("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <label htmlFor="name">Nombre completo</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 text-palet-black",
            {
              "border-red-500": errors.name
            }
          )
        }
        type="text"
        autoFocus
        {...register("name", {required: true})}
        />

      <label htmlFor="email">Correo electronico</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 text-palet-black",
            {
              "border-red-500": errors.email
            }
          )
        }
        type="email"
        {...register("email", {required: true, pattern: /^\S+@\S+$/i })}
      />

      <label htmlFor="password">Contraseña</label>
      <input
        className={
          clsx(
            "px-5 py-2 border bg-gray-200 rounded mb-5 text-palet-black",
            {
              "border-red-500": errors.password
            }
          )
        }
        type="password"
        {...register("password", {required: true, minLength: 8})}
      />



      <button
        className="btn-primary">
        Crear cuenta
      </button>

      {/* divisor l ine */ }
      <div className="flex items-center my-5">
        <div className="flex-1 border-t border-gray-500"></div>
        <div className="px-2 text-gray-800">O</div>
        <div className="flex-1 border-t border-gray-500"></div>
      </div>

      <Link
        href="/auth/login"
        className="btn-secondary text-center">
        Ingresar
      </Link>
    </form>
  );
};

export default RegisterForm;