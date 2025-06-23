"use server";

// Interfaces
import { Address } from "@/interfaces";
import prisma from "@/lib/prisma";

export const setUserAddress = async(address: Address, userId: string) => {
  try {
    const newAddress = await createOrReplaceAddress(address, userId);

    return {
      ok: true,
      address: newAddress
    }
  } catch (err) {
    console.log(err);
    return {
      ok: false,
      message: "No se pudo establecer la dirección del usuario"
    }
  };
};

const createOrReplaceAddress = async(address: Address, userId: string) => {
  try {
    const storedAddress = await prisma.userAddress.findUnique({
      where: { userId }
    });

    const addressToSave = {
      ...address,
      userId
    };

    console.log("Stored to save:", storedAddress);
    console.log("Address to save:", addressToSave);

    if (!storedAddress) {
      const newAddress = await prisma.userAddress.create({
        data: addressToSave
      });

      return newAddress;
    };

    const updatedAddress = await prisma.userAddress.update({
      where: { userId },
      data: addressToSave
    })

    return updatedAddress;
  } catch (err) {
    console.log(err);
    throw new Error("No se pudo establecer la dirección del usuariO");
  };
};
