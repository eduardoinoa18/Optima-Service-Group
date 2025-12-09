import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomNav from "@/components/MobileBottomNav";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Optima Service Group - Your Solution, All in One Place",
  description: "Professional support for taxes, immigration forms, documents, and everyday services with clarity, transparency, and trust. Bilingual services in English and Spanish.",
  keywords: ["tax preparation", "immigration forms", "notary public", "credit repair", "translations", "business services", "bilingual services"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} antialiased`}
      >
        <Header />
        <main className="min-h-screen md:pb-0 pb-20">{children}</main>
        <MobileBottomNav />
        <Footer />
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
