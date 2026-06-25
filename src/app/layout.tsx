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
  title: "Phosphorcode | Software proprietário para operações de saúde",
  description:
    "Sistemas proprietários para clínicas, laboratórios, operadoras e empresas de saúde que precisam de segurança, integração e arquitetura para crescer.",
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
