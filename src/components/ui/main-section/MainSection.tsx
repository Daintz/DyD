import Image from "next/image";

function getCloudinaryUrl(baseUrl: string, width: number, height: number) {
  return baseUrl.replace('/upload/', `/upload/w_${width},h_${height},c_fill/`);
};

const baseImageUrl = "https://res.cloudinary.com/dtttwxbgr/image/upload/v1750742374/D_1000_x_300_mm_aqy8e3.png";
const breakpoints = [
  { max: 480, width: 480, height: 300 },
  { max: 800, width: 800, height: 150 },
  { max: 10000, width: 1000, height: 300 },
];

const images = breakpoints.map(bp => ({
  ...bp,
  url: getCloudinaryUrl(baseImageUrl, bp.width, bp.height)
}));

export const MainSection = () => {
  return (
      <div className="relative w-[100%] h-[300px] md:w-[100%] md:h-[300px]">
        <Image
          src="https://res.cloudinary.com/dtttwxbgr/image/upload/v1750742374/D_1000_x_300_mm_aqy8e3.png"
          alt="Logo D&D Gadgets"
          fill
          style={{ objectFit: "contain" }}
          priority
        />
      </div>
  );
};