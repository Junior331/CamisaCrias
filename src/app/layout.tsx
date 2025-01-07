import type { Metadata } from "next";

import "./globals.css";
import { inter } from "./assets/fonts";

export const metadata: Metadata = {
  title: "Camisa Crias",
  description: "Saas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.svg" sizes="any" />
      </head>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
