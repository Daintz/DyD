import Image from "next/image";

interface Props {
  src: string;
  alt: string;
};

export const ImageBackground = ({ src, alt }: Props) => {
  return (
    <Image
      src={src}
      alt={alt}
      className="w-full object-cover"
      width={10000}
      height={10000}
    />
  );
};
