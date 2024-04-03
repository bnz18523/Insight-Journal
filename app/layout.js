'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { LoginProvider } from "../LoginContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <LoginProvider>
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
    </LoginProvider>
  );
}
