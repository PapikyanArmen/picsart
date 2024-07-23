import React from "react";
import Light from "@/app/components/Icons/Light";
import Night from "@/app/components/Icons/Night";
import cn from "classnames";
import { useTheme } from "next-themes";

import styles from "./ModeToggle.module.scss";
export function ModeToggle() {
  const { setTheme } = useTheme();
  return (
    <div className={cn(styles.container)}>
      <div className="lightMode" onClick={() => setTheme("light")}>
        <Light />
      </div>
      <div className="darkMode" onClick={() => setTheme("dark")}>
        <Night />
      </div>
    </div>
  );
}
