import { Navbar } from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import { Footer } from "@/components/Footer";

const RobotoMono = Roboto_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MX Technologies",
  description:
    "We create clean and creative websites that are professional and help you generate more visitors and revenue.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={RobotoMono.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
