import {clsx} from "clsx";
import {ButtonHTMLAttributes, FC, PropsWithChildren, SVGProps} from "react";
import styles from "./Button.module.scss";
import UploadIcon from '../../assets/common-file-add.svg?react';
import ReactIcon from '../../assets/react.svg?react';

type AvailableIcons = 'add' | 'react'
const Icons: Record<AvailableIcons, FC<SVGProps<SVGSVGElement>>> = {
    'add': UploadIcon,
    'react': ReactIcon
};

interface Props extends PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>> {
    variant?: "primary" | "danger" | "secondary";
    icon?: AvailableIcons
}

export const Button = ({variant = "primary", icon, children, ...rest}: Props) => {
    const IconComponent = icon ? Icons[icon] : null;

    return (
        <button
            {...rest}
            className={clsx(styles.base, styles[variant], {
                [styles.icon]: Boolean(icon)
            })}>
            <>
                {IconComponent && (<IconComponent role="presentation"/>)}
                {children}
            </>

        </button>
    )
}