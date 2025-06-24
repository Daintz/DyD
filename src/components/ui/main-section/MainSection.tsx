import Image from "next/image";

export const MainSection = () => {
  return (
    <div className="bg-white w-full h-90 relative">
      <Image
        src="https://res.cloudinary.com/dtttwxbgr/image/upload/v1750742474/D_1000_x_300_mm_1000_x_250_mm_zi6m04.png"
        alt="Descripción de la imagen"
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};