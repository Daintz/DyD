"use server";

import bcrypt from "bcryptjs";

// Libraries
import prisma from "@/lib/prisma";

export const registerUser = async(name: string, email: string, password: string) => {
  try {
    const user = await prisma.user.create({
      data: {
        name: name,
        email: email.toLowerCase(),
        password: bcrypt.hashSync(password),
      }
    });

    return {
      ok: true,
      user,
      message: "Usuario creado"
    }
  } catch (error) {
    console.log(error);

    return {
      ok: false,
      message: "No se pudo crear el usuario"
    }
  }
};
