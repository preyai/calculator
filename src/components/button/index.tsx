import styles from './button.module.scss'

interface ButtonProps {
    text: string,
    size?: string
}

const Button = ({ text, size }: ButtonProps) => {
    return (
        <button className={styles.box} style={size ? { gridColumn: size } : {}}>
            {text}
        </button>
    )
}
export default Button