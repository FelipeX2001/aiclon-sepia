import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

// 1. Importar Montserrat
import { Montserrat } from "next/font/google";

import "./globals.css";

// 2. Configurar la fuente Montserrat
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"], 
  // weights opcionales
  weight: ["400", "800"],  
  // si quieres cursivas o más pesos, agrégalos también
  // style: ["normal", "italic"],
});

// Mantén tus otras fuentes Geist y Geist_Mono
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AICLON AI Assistant",
  description: "Voice AI Demo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        // 3. Agregar Montserrat al className
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${montserrat.variable} 
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
