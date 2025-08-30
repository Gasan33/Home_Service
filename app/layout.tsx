import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from './provider'
import { Toaster } from "@/components/ui/sonner";
import Footer from "./_components/Footer";

const geistSans = Outfit({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "QuickFix – Home Services On Demand",
  description: "Book trusted home services instantly – cleaning, repairs, moving & more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistSans.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <div >
            <Header />
            <Toaster />
            <div className="mx-6 md:mx-16">
              {children}
            </div>

            <Footer />
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
