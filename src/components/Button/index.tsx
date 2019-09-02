import React from 'react'
import styles from './index.module.scss';

export interface ButtonProps {
    primary?: boolean;
    href?: string
}
type buttonProps = React.DOMAttributes<HTMLButtonElement> & ButtonProps;

function classes(...args: any[]) {
    return args.filter(Boolean).join(' ');
}
const Button: React.FC<buttonProps> = ({ children, primary, href, ...props }) => {
    let color = 'default';
    if (primary) color = 'primary';

    if (href) {
        props.onClick = () => {
            window && window.location && (window.location.href = href);
        }
    }
    return (
        <button className={classes(styles.button, styles[color])} {...props}>
            {children}
        </button>
    )
}

export default Button;