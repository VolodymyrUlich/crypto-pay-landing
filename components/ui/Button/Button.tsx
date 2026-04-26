import styles from "./Button.module.scss";
import clsx from "clsx";
import Link, { LinkProps } from "next/link";

type ButtonProps = {
    variant?: "primary" | "secondary" | "transparent" | "ghost";
    children: React.ReactNode;
    href?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    React.AnchorHTMLAttributes<HTMLAnchorElement> &
    Partial<LinkProps>;

export const Button = ({
    type = "button",
    variant = "primary",
    children,
    href,
    className,
    ...props
}: ButtonProps) => {
    const buttonClass = clsx(styles.button, styles[variant], className);

    if (href) {
        const isExternal = href.startsWith('http');

        if (isExternal) {
            return (
                <a
                    href={href}
                    className={buttonClass}
                    target="_blank"
                    rel="noopener noreferrer"
                    {...props}
                >
                    {children}
                </a>
            );
        }

        return (
            <Link href={href} className={buttonClass} {...props}>
                {children}
            </Link>
        );
    }

    return (
        <button type={type} className={buttonClass} {...props}>
            {children}
        </button>
    );
};
