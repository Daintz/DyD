import Link from "next/link";

// Icons
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";

export const Footer = () => {
  return (
    <footer className="w-full text-xs py-6 text-center">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center items-center gap-4">
        {/* Enlaces */}
        <div className="flex flex-wrap justify-center md:justify-start items-center gap-4 text-sm">
          <Link href="/" className="hover:underline">
            <span className="font-bold">D&D</span> | Shop {new Date().getFullYear()}
          </Link>
          <Link href="/contactus" className="hover:underline">Contáctenos</Link>
          <Link href="/termsandconditions" className="hover:underline">Privacidad & Legal</Link>
          <Link href="/" className="hover:underline">Ubicaciones</Link>
        </div>

        <div className="flex space-x-4">
          <a href="https://www.facebook.com/profile.php?id=61570094964123" target="_blank" aria-label="Facebook" className="hover:opacity-75">
            <FaFacebook className="w-5 h-5" />
          </a>
          <a href="https://www.instagram.com/tecnologiadyd/" target="_blank" aria-label="Instagram" className="hover:opacity-75">
            <AiFillInstagram className="w-5 h-5" />
          </a>
          <a href="https://wa.me/573137671413" target="_blank" aria-label="Whatsapp" className="hover:opacity-75">
            <BsWhatsapp className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};
