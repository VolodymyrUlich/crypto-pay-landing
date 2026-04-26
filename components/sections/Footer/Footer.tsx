'use client'
import styles from './Footer.module.scss'
import { NAV_LINKS } from '@/constants/navigation'
import { Button, Container } from "@/components"
import { scrollToSection } from '@/utils/scrollToSection'
import { LINKS } from '@/constants/links'

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.inner}>
                    <div className={styles.left}>
                        <img className={styles.logo} src="/images/logo.png" alt="Crypto Pay Logo" />
                    </div>

                    <nav>
                        <ul className={styles.center}>
                            {NAV_LINKS.map((link) => (
                                <li key={link.href}>
                                    <Button onClick={() => scrollToSection(link.href)} variant="ghost">
                                        {link.label}
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Button href={LINKS.GET_STARTED} className={styles.right} variant="transparent">Get started</Button>

                </div>

                <p className={styles.copyright}>©2023 Crypto Bot</p>
            </Container>
        </footer>
    )
}
