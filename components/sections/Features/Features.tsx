'use client'

import styles from './Features.module.scss'
import { Container, CryptoCurrencies, FeatureCard } from '@/components'
import clsx from 'clsx'
import { useMountedTheme } from '@/hooks/useMountedTheme'
import { LINKS } from '@/constants/links'

export const Features = () => {
    const { theme } = useMountedTheme()

    return (
        <section className={styles.features} id='features'>
            <Container className={styles.container}>
                <CryptoCurrencies />

                {FEATURE_CARDS.map((card) => {
                    const src = theme === 'dark' && card.video.dark ? card.video.dark : card.video.light

                    return (
                        <FeatureCard
                            key={card.title}
                            title={card.title}
                            subtitle={card.subtitle}
                            className={clsx(styles.card, card.className?.map(s => styles[s]))}
                        >
                            <video
                                style={{ aspectRatio: card.videoRatio }}
                                key={src}
                                src={src}
                                muted
                                autoPlay
                                loop
                                playsInline
                            />
                        </FeatureCard>
                    )
                })}
            </Container>
        </section>
    )
}

const FEATURE_CARDS = [
    {
        title: 'One click to start',
        subtitle: (
            <>
                Open <a className="highlight" href={LINKS.CRYPTO_BOT} target="_blank"
                    rel="noopener noreferrer">@CryptoBot</a>, go to{' '}
                <a href={LINKS.GET_STARTED} target="_blank"
                    rel="noopener noreferrer" className="highlight">Crypto Pay</a> and tap Create App to get API Token
            </>
        ),
        video: { light: '/videos/one-click.mp4', dark: '/videos/one-click-dark.mp4' },
        videoRatio: '355/144',
    },
    {
        title: 'Real-time exchange rates',
        subtitle: (
            <>
                Request up to date currency rate with the{' '}
                <a href={LINKS.API_DOCS} target="_blank"
                    rel="noopener noreferrer" className="highlight">getExchangeRates</a> API method
            </>
        ),
        video: { light: '/videos/exchange.mp4', dark: '/videos/exchange-dark.mp4' },
        videoRatio: '355/100',
    },
    {
        title: 'Payment statistics',
        subtitle: (
            <>
                Open <a className="highlight" href={LINKS.CRYPTO_BOT} target="_blank"
                    rel="noopener noreferrer">@CryptoBot</a>, go to{' '}
                <a className="highlight" href={LINKS.GET_STARTED} target="_blank"
                    rel="noopener noreferrer">Crypto Pay</a> and{' '}
                <span className="highlight">My Apps</span>, App Name to get Statistics
            </>
        ),
        video: { light: '/videos/statistics.mp4' },
        videoRatio: '580/526',
        className: ['videoRadius'],
    },
    {
        title: 'Send coins to users',
        subtitle: (
            <>
                Automate payouts to users with <a className="highlight" href={LINKS.API_DOCS} target="_blank"
                    rel="noopener noreferrer">transfer</a> API
                method
            </>
        ),
        video: { light: '/videos/send.mp4', dark: '/videos/send-dark.mp4' },
        videoRatio: '570/342',
        className: ['cardNoPadding'],
    },
    {
        title: 'Anonymous payments',
        subtitle: (
            <>
                Use allow_anonymous parameter in <a className="highlight" href={LINKS.API_DOCS} target="_blank"
                    rel="noopener noreferrer">createInvoice</a>{' '}
                method to give user an option to remain private
            </>
        ),
        video: { light: '/videos/anonymous.mp4' },
        videoRatio: '355/195',
        className: ['videoRadius'],
    },
];