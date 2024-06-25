import type { Metadata } from "next";
import { Inter, Vazirmatn } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";
import { cn } from "@/lib/utils";
import Navbar from "@/components/main/Navbar";

const vazir = Vazirmatn({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-vazir",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Crypto Exchange",
  description: "A place to buy and sell crypto",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={cn(
        "min-h-screen relative w-full bg-background antialiased",
        vazir.variable,
        inter.variable
      )} lang="fa" dir="rtl" suppressHydrationWarning>
      <body
      className="font-vazir"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
