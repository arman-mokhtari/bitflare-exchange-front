"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { adminNavItems } from "@/data/navItems";
import LogoutToggle from "@/components/common/LogoutToggle";

const AdminNavigationLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {adminNavItems.map(({ href, icon: Icon, label }) => {
        const isActive = pathname === href;

        return (
          <Link
            key={label}
            href={href}
            className={`flex items-center gap-2 py-2 pr-3 font-medium text-foreground/80 hover:text-primary ${
              isActive
                ? "border-r-4 border-blue-500 !font-bold !text-primary"
                : ""
            }`}
          >
            <Icon className="size-5" />
            {label}
          </Link>
        );
      })}
      <LogoutToggle
        text
        iconSize="size-5"
        otherClasses="flex items-center gap-2 py-2 pr-3 flex-row-reverse font-medium text-foreground/80 hover:text-red-700 text-base"
      />
    </>
  );
};

export default AdminNavigationLinks;
