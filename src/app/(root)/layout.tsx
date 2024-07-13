import Footer from "@/components/root/footer/FooterMainContent";
import "../globals.css";
import React from "react";
import Navbar from "@/components/root/header/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen">{children}</main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
