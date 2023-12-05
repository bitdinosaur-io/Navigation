import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import toast, { Toaster } from "react-hot-toast";
import { Providers } from "@/components/functions/nextuiprovider";

export const metadata: Metadata = {
  title: "Navigation - Watcher.tools",
  description: "Navigation - Watcher.tools",
};

const Chillax = localFont({
  src: "../assets/fonts/Chillax-Variable.ttf",
  display: "swap",
  variable: "--font-chillax",
});

const Pally = localFont({
  src: "../assets/fonts/Pally-Variable.ttf",
  display: "swap",
  variable: "--font-pally",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={`scroll-smooth ${Chillax.variable} ${Pally.variable}`}>
      <body>
        <Providers>{children}</Providers>
        <Toaster reverseOrder={true} />
      </body>
    </html>
  );
}
