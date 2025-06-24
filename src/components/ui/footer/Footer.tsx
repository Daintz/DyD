import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="w-full text-xs py-6 text-center">
      <div className="flex flex-wrap justify-center items-center gap-4 px-4">
        <Link href="/" className="hover:underline">
          <span className="font-bold">D&D</span> | Shop {new Date().getFullYear()}
        </Link>
        <Link href="/" className="hover:underline">Privacidad & Legal</Link>
        <Link href="/" className="hover:underline">Ubicaciones</Link>
      </div>
    </footer>
  );
};
