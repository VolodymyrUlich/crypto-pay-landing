import styles from './Api.module.scss'
import { Button, Container } from "@/components"
import { LINKS } from '@/constants/links'

export const Api = () => {
    return (
        <section className={styles.api}>
            <Container>
                <div className={styles.card}>
                    <div className={styles.cardInner}>

                        <h2 className={styles.title}>Crypto Pay API</h2>

                        <p className={styles.subtitle}>Explore available methods and types and integrate them in any programming language.</p>

                        <Button href={LINKS.API_DOCS} variant="transparent">Open API Docs</Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}
