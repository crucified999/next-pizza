import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import "./globals.css";

const geistNunito = Nunito({
  variable: "--font-geist-nunito",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Next Pizza",
  description: "Pet-project Next Pizza",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistNunito.className} antialiased px-15`}>
        {children}
      </body>
    </html>
  );
}
