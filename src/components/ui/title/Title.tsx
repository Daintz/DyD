// Fonts
import { inter } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
};

export const Title = ({title, subtitle, className}: Props) => {
  return (
    <div className={`mt-3 text-white ${className}`}>
      <h1 className={`${inter.className} antialiased text-1xl font-semibold my-7`}>
        { title }
      </h1>

      {
        subtitle && (
          <h3 className="text-xl mb-5">{ subtitle }</h3>
        )
      }
    </div>
  );
};