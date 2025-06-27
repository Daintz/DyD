import type { Metadata } from "next";

// Components
import { Provider } from "@/components";

// Fonts
import { inter } from "@/config/fonts";

// Styles
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template:  "%s - D&D | Gadgets",
    default: "Home - D&D | Gadgets"
  },
  description: "Los mejores accesorios para el dia a dia aqui. Relojes inteligentes, Airpods, Parlantes, Gadgets y más",
  keywords: ["gadgets", "accesorios", "tecnología", "relojes inteligentes", "airpods", "parlantes"],
  openGraph: {
    title: "D&D | Gadgets",
    description: "Los mejores accesorios para el día a día aquí.",
    url: "https://tusitio.com",
    siteName: "D&D | Gadgets",
    images: [
      {
        url: "/public/vercel.svg",
        width: 800,
        height: 600,
        alt: "Logo D&D Gadgets"
      }
    ],
    locale: "es_CO",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "D&D | Gadgets",
    description: "Los mejores accesorios para el día a día aquí.",
    images: ["/public/vercel.svg"]
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
};
