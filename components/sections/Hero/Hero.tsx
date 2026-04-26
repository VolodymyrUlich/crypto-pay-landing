"use client";

import styles from "./Hero.module.scss";
import { Container, Button } from "@/components";
import { useMountedTheme } from "@/hooks/useMountedTheme";
import { LINKS } from "@/constants/links";

export const Hero = () => {
  const { theme, isMounted } = useMountedTheme();

  const phoneImageSrc =
    theme === "light" ? "/images/phone-light.webp" : "/images/phone-dark.webp";

  return (
    <section className={styles.hero}>
      <Container className={styles.container}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Crypto payments for <span>telegram bots</span>
          </h1>

          <p className={styles.subtitle}>
            Seamlessly accept crypto payments <br />
            in your Telegram bots and services.
          </p>

          <Button href={LINKS.GET_STARTED} variant="primary" className={styles.button}>
            Get started
          </Button>

          <div className={styles.bots}>
            <img src="/images/bot-1.webp" alt="Bot 1" />
            <img src="/images/bot-2.webp" alt="Bot 2" />
            <img src="/images/bot-3.webp" alt="Bot 3" />
            <img src="/images/bot-4.webp" alt="Bot 4" />
            <img src="/images/bot-5.webp" alt="Bot 5" />
          </div>

          <p className={styles.description}>Popular bots use Crypto Pay</p>
        </div>

        <div className={styles.phone}>
          {isMounted && <img src={phoneImageSrc} alt="phone" draggable={false} />}
        </div>
      </Container>
    </section>
  );
};
