import {clsx} from "clsx";
import {ButtonHTMLAttributes, PropsWithChildren} from "react";
import styles from "./Button.module.scss";

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    variant?: "primary" | "danger" | "secondary"
}

export const Button = ({ variant = "primary", children, ...rest}: Props) => {
    return (
        <button
            {...rest}
            className={clsx(styles.base, styles[variant])}>
            {children}
        </button>
    )
}