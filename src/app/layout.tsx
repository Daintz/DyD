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
    url: process.env.MERCADOPAGO_NOTIFICATION_URL,
    siteName: "D&D | Gadgets",
    images: [
      {
        url: "./favicon.ico",
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
    images: ["./favicon.ico"]
  },
  authors: [
    { name: "D&D Gadgets", url: process.env.MERCADOPAGO_NOTIFICATION_URL }
  ],
  creator: "D&D Gadgets",
  publisher: "D&D Gadgets",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false
    }
  },
  category: "ecommerce",
  applicationName: "D&D Gadgets",
  generator: "Next.js 14",
  other: {
    "facebook-domain-verification": "ewsdpsyyjrp2g5k03di6pbhs9z9vl2"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* <!-- Meta Pixel Code --> */}
          <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '4077092855881726');
              fbq('track', 'PageView');
                          `
            }}
          />
          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=4077092855881726&ev=PageView&noscript=1"
              alt=""
            />
          </noscript>
        {/* <!-- End Meta Pixel Code --> */}
      </head>
      <body className={inter.className}>
        <Provider>
          {children}
        </Provider>
      </body>
    </html>
  );
};
