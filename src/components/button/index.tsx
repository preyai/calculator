import styles from './button.module.scss'

interface ButtonProps {
    text: string,
    size?: string,
    iris?: boolean
}

const Button = ({ text, size, iris }: ButtonProps) => {
    return (
        <button className={[styles.box, iris ? styles.iris : ''].join(' ')} style={size ? { gridColumn: size } : {}}>
            {text}
        </button>
    )
}
export default Button