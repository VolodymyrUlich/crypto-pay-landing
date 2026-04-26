import styles from './Community.module.scss'
import { SDKS } from '@/constants/sdks'
import { Button, Container } from '@/components'
import { LINKS } from '@/constants/links'

export const Community = () => {
    return (
        <section className={styles.community}>
            <div className={styles.inner}>
                <Container className={styles.container}>
                    <h2 className={styles.title}>Join dev community</h2>

                    <p className={styles.subtitle}>Connect with bot developers and explore the possibilities our crypto payments service unlocks.</p>

                    <div className={styles.sdks}>
                        {SDKS.map((sdk) => (
                            <Button key={sdk.href} href={sdk.href} variant='ghost' className={styles.sdk}>
                                <img src={sdk.icon} alt={sdk.name} />
                                <h3>{sdk.name}</h3>
                            </Button>
                        ))}
                    </div>

                    <Button href={LINKS.DEV_CHAT} className={styles.button}>Open Devs chat</Button>
                </Container>
            </div>
        </section>
    )
}
