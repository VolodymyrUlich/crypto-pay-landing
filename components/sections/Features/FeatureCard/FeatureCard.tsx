import styles from './FeatureCard.module.scss'
import clsx from 'clsx';

interface FeatureCardProps {
    className?: string;
    title: string,
    subtitle: React.ReactNode;
    children: React.ReactNode
}

export const FeatureCard = ({ className, title, subtitle, children }: FeatureCardProps) => {
    return (
        <div className={clsx(styles.card, className)}>
            {children}

            <h2 className={styles.title}>{title}</h2>

            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}
