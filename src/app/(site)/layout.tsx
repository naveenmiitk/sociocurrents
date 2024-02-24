import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Poppins, Satisfy, Caveat } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import { Anton } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";
import GAnalytics from "@/components/Analytics/Analytics";

export const inter = Inter({ subsets: ["latin"] });
export const anton = Anton({ subsets: ["latin"], weight: ["400"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const barlow = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
});
export const satisfy = Satisfy({ subsets: ["latin"], weight: ["400"] });
export const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: {
    default: "Socio Current | Sociology Optional UPSC",
    template: "%s - SocioCurrent | Sociology Optional",
  },
  description:
    "Get Updated Currents Affairs For Your UPSC CSE Preperation with Sociocurrents",
  twitter: {
    card: "summary_large_image",
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL!),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <NavBar />
        {children}
        <Footer />
        <GAnalytics />
      </body>
    </html>
  );
}
