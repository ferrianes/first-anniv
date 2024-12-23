import type { Metadata } from "next";
import { La_Belle_Aurore } from "next/font/google";
import "./globals.css";

const playwrite = La_Belle_Aurore({
  variable: "--font-playwrite",
  weight: ["400"]
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playwrite.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
