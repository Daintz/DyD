import Image from "next/image";

export const MainSection = () => {
  return (
    <>
      <div className="relative w-[100%] h-[300px] lg:hidden">
        <Image
          src="https://res.cloudinary.com/dtttwxbgr/image/upload/v1751082025/main-section-1000x600_mm_ye1umd.png"
          alt="Logo D&D Gadgets Mobile"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>

      {/* Imagen para desktop */}
      <div className="relative w-[100%] h-[300px] hidden lg:block">
        <Image
          src="https://res.cloudinary.com/dtttwxbgr/image/upload/v1751082025/main-section-1000x250_mm_xptd9r.png"
          alt="Logo D&D Gadgets Desktop"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
    </>
  );
};
