"use client";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const MainLogo = ({otherClasses}: {otherClasses?: string}) => {
  // use theme for ternary operator
  const { theme, resolvedTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const logoSrc =
    theme === "dark" || resolvedTheme === "dark"
      ? "/assets/images/logos/logo-dark.png"
      : "/assets/images/logos/logo-light.png";
  // use theme for ternary operator End
  return (
    <Link href="/">
      <Image className={otherClasses} src={logoSrc} width={120} height={50} alt="logo" />
    </Link>
  );
};

export default MainLogo;
