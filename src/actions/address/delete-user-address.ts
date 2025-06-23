"use server";

import prisma from "@/lib/prisma";

export const deleteUserAddress = async(userId: string) => {
  try {
    const findUserId = await prisma.userAddress.findUnique({
      where: { userId }
    });

    if (findUserId) {
      const deleteUserAddress = await prisma.userAddress.delete({
        where: { userId }
      })

      return {
        ok: true,
        message: "Dirección eliminada correctamente",
        deleteUserAddress
      };
    };
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: "No se pudo elliminar la dirección del usuario"
    };
  };
};

