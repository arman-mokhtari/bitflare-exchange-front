import React from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div
        role="spacer"
        className="mb-4 min-h-[66px]
            md:mb-6 md:min-h-[95px]"
      />
      {children}
    </div>
  );
}