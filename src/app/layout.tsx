import type { Metadata } from "next";
import { Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-hanken",
  display: "swap",
});

const jetBrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phosphor.code | Software para operação real",
  description:
    "Software sob medida para varejo e saúde — feito para vender, atender e operar com mais controle, integração e segurança.",
  icons: {
    icon: "/brand/favicon.svg",
  },
  openGraph: {
    title: "Phosphor.code | Software para operação real",
    description:
      "Software sob medida para varejo e saúde — feito para vender, atender e operar com mais controle, integração e segurança.",
    type: "website",
    url: "https://phosphorcode.com.br",
    siteName: "Phosphor.code",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Phosphor.code | Software para operação real",
    description:
      "Software sob medida para varejo e saúde — feito para vender, atender e operar com mais controle, integração e segurança.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${hanken.variable} ${jetBrains.variable}`}>{children}</body>
    </html>
  );
}
