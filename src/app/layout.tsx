import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Phosphor | Site pronto para brandbook",
  description: "Landing page moderna, responsiva e preparada para receber identidade visual oficial.",
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
      <body>{children}</body>
    </html>
  );
}
