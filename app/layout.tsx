import Script from 'next/script'
import type { Metadata } from "next";
import { JetBrains_Mono, Poppins } from "next/font/google";
import "@fontsource/noto-sans-bengali/400.css";
import "@fontsource/noto-sans-bengali/500.css";
import "@fontsource/noto-sans-bengali/600.css";
import "@fontsource/noto-sans-bengali/700.css";
import "./app.css";
import Providers from "./providers";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatSupport from "@/components/FloatSupport";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prochesta IT — Simple. Fast. Powerful.",
  description:
    "Bangladesh's #1 IT Company. Full-stack e-commerce, web, and mobile — engineered for speed, conversion, and scale. 8 years. 4400+ shipped.",
  icons: {
    icon: "/images/company/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var s=localStorage.getItem('prochesta-theme');var t=s||(window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');d.setAttribute('data-theme',t);var l=localStorage.getItem('prochesta-lang');var n=(navigator.language||'').toLowerCase();var lang=l||((n.startsWith('bn'))?'bn':'en');d.setAttribute('data-lang',lang);}catch(e){document.documentElement.setAttribute('data-theme','light');document.documentElement.setAttribute('data-lang','en');}})();`,
          }}
        />
      </head>
      <body>
        <Providers>
          <Nav />
          {children}
          <Footer />
          <FloatSupport />
        </Providers>
      </body>
    </html>
  );
}
