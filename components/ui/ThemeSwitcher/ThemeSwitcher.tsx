"use client";

import styles from "./ThemeSwitcher.module.scss";
import { Button } from "@/components";
import { useMountedTheme } from "@/hooks/useMountedTheme";

export const ThemeSwitcher = () => {
  const { theme, setTheme } = useMountedTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const themeSwitcherImg =
    theme === "light"
      ? "/images/theme-switcher-light.svg"
      : "/images/theme-switcher-dark.svg";

  return (
    <Button variant="ghost" onClick={toggleTheme} aria-label="Toggle theme">
      <img src={themeSwitcherImg} alt="toggle theme" className={styles.icon} />
    </Button>
  );
};
