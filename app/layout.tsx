import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NavBar, Footer } from "@/app/section/index";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Git-💯",
  description: "Learn Git and GitHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-gray-900 ${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
