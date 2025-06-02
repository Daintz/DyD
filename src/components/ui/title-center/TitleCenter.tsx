// Fonts
import { inter } from "@/config/fonts";

interface Props {
  title: string;
  subtitle?: string;
  className?: string;
};

export const TitleCenter = ({title, subtitle, className}: Props) => {
  return (
    <div className={`mt-10 text-white ${className} flex flex-col items-center justify-center text-center`}>
      <h1 className={`${inter.className} antialiased text-6xl font-semibold my-2`}>
        { title }
      </h1>

      {
        subtitle && (
          <h3 className="text-3xl mb-5">{ subtitle }</h3>
        )
      }
    </div>
  );
};
