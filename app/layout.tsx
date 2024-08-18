import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/app/ui/Footer";
import Navigation from "@/app/ui/Navigation/Navigation";
import "@/app/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rishav Roy | Full Stack Web Developer",
  description: "Welcome to my personal portfolio!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en" data-theme='valentine'>
      <body className={`${inter.className} flex flex-col justify-center items-center p-2 lg:p-4`}>
        <main className="flex flex-col justify-center items-center">
          <Navigation />
          <div className="flex gap-12 justify-center items-center">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
