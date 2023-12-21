import "../globals.css";
import type { Metadata } from "next";
import { Lora } from "next/font/google";
import NavBar from "@/components/NavBar";
import LogoBar from "@/components/LogoBar";
import Footer from "@/components/Footer";

const garamond = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Lady Louie",
  description: "Stories you can relate to",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={garamond.className}>
        <div className='relative'>
          <NavBar />
        </div>
        <div className='bg-gray-200'>{children}</div>
        <Footer />
      </body>
    </html>
  );
}
