'use client'

import styles from "./Header.module.scss";
import { NAV_LINKS } from "@/constants/navigation";
import { Container, Button, ThemeSwitcher } from "@/components";
import { scrollToSection } from "@/utils/scrollToSection";
import { LINKS } from "@/constants/links";

export const Header = () => {

  return (
    <header className={styles.header}>
      <Container className={styles.container}>
        <img className={styles.headerLogo} src="/images/logo.png" alt="logo" />

        <nav>
          <ul className={styles.navBar}>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <Button variant="ghost" onClick={() => scrollToSection(link.href)}>
                  {link.label}
                </Button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.right}>
          <ThemeSwitcher />

          <Button href={LINKS.GET_STARTED} variant="secondary">Get started</Button>
        </div>
      </Container>
    </header>
  );
};
