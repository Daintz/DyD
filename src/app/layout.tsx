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
  description: "Accesorios tecnológicos",
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
