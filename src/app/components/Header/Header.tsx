"use client";

import React from "react";
import { ModeToggle } from "@/app/components/ModeToggle/ModeToggle";
import cn from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "./Header.module.scss";
const Header = () => {
  const pathname = usePathname();
  return (
    <header className={cn(styles.container)}>
      <nav>
        <Link
          href="/"
          className={cn(styles.link, {
            [styles.link_active]: pathname === "/",
          })}
        >
          Home
        </Link>
        <Link
          href="/users"
          className={cn(styles.link, {
            [styles.link_active]: pathname.includes("/users"),
          })}
        >
          Users
        </Link>
      </nav>
      <ModeToggle />
    </header>
  );
};
export default Header;
