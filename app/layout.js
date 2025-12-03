import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pablo Francisco Lerman - Desarrollador Full Stack",
  description: "Portfolio de Pablo Francisco Lerman, Systems Analyst y Full Stack Developer de Argentina. Especializado en Next.js, React, Python y desarrollo de soluciones web modernas.",
  keywords: ["desarrollador full stack", "next.js", "react", "python", "portfolio", "argentina"],
  authors: [{ name: "Pablo Francisco Lerman" }],
  openGraph: {
    title: "Pablo Francisco Lerman - Desarrollador Full Stack",
    description: "Systems Analyst transitioning to Software Development. E-commerce, CRM y aplicaciones web modernas.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
