import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation/Navigation";
import ToggleTheme from "./components/ToggleTheme";
import "./globals.css";

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
      <body className={inter.className}>
        <main>
          <header className="flex gap-12 justify-center items-center">
            <Navigation />
            <ToggleTheme />
          </header>
          <div className="flex gap-12 justify-center items-center">
            {children}
          </div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
