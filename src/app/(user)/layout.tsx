import { Tabs } from "@/components/ui/tabs";
import "../globals.css";
import React from "react";
import UserAside from "@/components/user/userNav/UserAside";
import MainLogo from "@/components/common/MainLogo";
import { StepProvider } from "@/providers/StepContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="min-h-screen">
        <Tabs
          defaultValue="overview"
          dir="rtl"
          className="flex min-h-screen w-full bg-muted/40"
        >
          <UserAside otherClasses=" z-10 hidden flex-col border-l bg-background sm:flex" />

          <div className="flex w-full flex-col sm:gap-4 sm:py-4">
            <header className="sticky top-0 z-30 flex h-14 justify-between gap-4 border-b bg-background px-4 sm:hidden sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
              <MainLogo />
              <UserAside otherClasses="flex flex-row" />
            </header>
            <StepProvider>
                          <main className="flex items-start p-4">{children}</main>

            </StepProvider>

          </div>
        </Tabs>
      </div>
  );
}
