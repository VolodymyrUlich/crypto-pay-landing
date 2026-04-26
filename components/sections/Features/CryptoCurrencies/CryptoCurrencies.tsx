import styles from './CryptoCurrencies.module.scss'
import { LINKS } from '@/constants/links'

const CURRENCIES = [
    { icon: '/images/eth.svg', name: 'ETH' },
    { icon: '/images/usdt.svg', name: 'USDT' },
    { icon: '/images/btc.svg', name: 'BTC' },
    { icon: '/images/ton.svg', name: 'TON' },
    { icon: '/images/bnb.svg', name: 'BNB' },
    { icon: '/images/trx.svg', name: 'TRX' },
    { icon: '/images/usdc.svg', name: 'USDC' },
    { icon: '/images/ltc.svg', name: 'LTC' },
]

export const CryptoCurrencies = () => {
    return (
        <div className={styles.card}>
            <div className={styles.cryptoCurrencies}>
                {CURRENCIES.map((item) => (
                    <div key={item.name} className={styles.cryptoCurrenciesItem}>
                        <img src={item.icon} alt='' />

                        <span>{item.name}</span>
                    </div>
                ))}
            </div>

            <div>
                <h2 className={styles.title}>Accept a wide range of cryptocurrencies</h2>

                <p className={styles.subtitle}>Bill any supported cryptocurrencies with asset parameter in <a href={LINKS.API_DOCS} target="_blank"
                    rel="noopener noreferrer" className="highlight">GetInvoice</a> method</p>
            </div>
        </div>
    )
}
