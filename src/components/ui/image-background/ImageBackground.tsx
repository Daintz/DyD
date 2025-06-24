import Image from "next/image";

interface Props {
  src: string;
  alt: string;
};

export const ImageBackground = ({ src, alt }: Props) => {
  return (
    <div className="bg-white w-full h-45 relative">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        objectFit="cover"
        priority
      />
    </div>
  );
};
