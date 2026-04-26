import styles from './QuickStart.module.scss'
import { Container } from "@/components"
import clsx from "clsx";
import { LINKS } from "@/constants/links";

export const QuickStart = () => {
    return (
        <section className={styles.quickStart} id="quick-start">
            <Container>
                <h2 className={styles.title}>Quick start using<span className="highlight"> Crypto Pay</span></h2>

                <div className={styles.steps}>
                    <div className={clsx(styles.step, styles.isReversed)}>
                        <img className={styles.stepImg} src="/images/quick-1.webp" alt="Step" />

                        <div className={styles.stepText}>
                            <span className={styles.stepNumber}>1</span>

                            <div className={styles.stepDescription}>
                                <h3 className={styles.stepTitle}>Authorizing your app</h3>

                                <ol className={styles.list}>
                                    <li>1. Open <a className="highlight" href={LINKS.CRYPTO_BOT} target="_blank"
                                        rel="noopener noreferrer">@CryptoBot</a></li>
                                    <li>2. Go to <a className="highlight" href={LINKS.GET_STARTED} target="_blank"
                                        rel="noopener noreferrer">Crypto Pay</a></li>
                                    <li>3. Tap <span className="highlight">Create App</span></li>
                                    <li>4. Get <span className="highlight">API Token</span></li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className={styles.step}>
                        <img className={styles.stepImg} src="/images/quick-2.webp" alt="Step" />

                        <div className={styles.stepText}>
                            <span className={styles.stepNumber}>2</span>

                            <div className={styles.stepDescription}>
                                <h3 className={styles.stepTitle}>Crypto Pay API Request</h3>

                                <p className={styles.stepSubtitle}>Requests are only served over HTTPS To pass parameters use:</p>

                                <ul className={styles.list}>
                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span className="highlight">URL query string</span>
                                    </li>

                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span className="highlight">application/json </span>
                                    </li>

                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span className="highlight">application/x-www-form-urlencoded</span>
                                    </li>

                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span className="highlight">multipart/form-data</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className={clsx(styles.step, styles.isReversed)}>
                        <img className={styles.stepImg} src="/images/quick-3.webp" alt="Step" />

                        <div className={styles.stepText}>
                            <span className={styles.stepNumber}>3</span>

                            <div className={styles.stepDescription}>
                                <h3 className={styles.stepTitle}>Getting updates</h3>

                                <p className={styles.stepSubtitle}>There are two ways of receiving updates for your app:</p>

                                <ul className={clsx(styles.list, styles['list--Updates'])}>
                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span><a className="highlight" href={LINKS.API_DOCS} target="_blank"
                                            rel="noopener noreferrer">getInvoices</a> method to get a list of created invoices.</span>
                                    </li>

                                    <li className={styles.listItem}>
                                        <span className={styles.listCircle} />
                                        <span><a className="highlight" href={LINKS.API_DOCS} target="_blank"
                                            rel="noopener noreferrer">Webhooks</a> to receive updates in realtime.</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}