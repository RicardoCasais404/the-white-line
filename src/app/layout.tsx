import type { Metadata } from "next";
import { Geist, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/navbar";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "THE WHITE LINE",
  description: "Information without judgment.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white font-serif text-neutral-900 antialiased",
          geistSans.variable,
          lora.variable,
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar /> {/* <--- Restored here */}
          <main className="flex-1">{children}</main>
        </div>
      </body>
    </html>
  );
}
