import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { SiteBackground } from "@/components/ui/site-background";
import { SmoothScroll } from "@/components/providers/smooth-scroll";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Phosphorcode | Sistemas que seguram a sua operacao",
  description: "Software sob medida para empresas que precisam operar com mais controle, integração e segurança.",
  icons: {
    icon: "/brand/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${hanken.variable} ${jetBrains.variable}`}>
        <SmoothScroll />
        <SiteBackground />
        {children}
      </body>
    </html>
  );
}
