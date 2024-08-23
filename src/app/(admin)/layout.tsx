import React from "react";
import AdminHeader from "@/components/admin/adminNav/AdminHeader";
import AdminAside from "@/components/admin/adminNav/AdminAside";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <AdminHeader />
      <div className="flex flex-1">
        <AdminAside />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
