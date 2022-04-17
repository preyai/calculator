import useMode from '../../hooks/useMode'
import styles from './button.module.scss'

interface ButtonProps {
    text: string,
    handler?: () => {},
    size?: string,
    iris?: boolean
}

const Button = ({ text, handler, size, iris }: ButtonProps) => {
    const { mode } = useMode()

    return (
        <button
            className={[styles.box, iris ? styles.iris : '', mode === 'runtime' ? styles.enable : ''].join(' ')}
            style={size ? { gridColumn: size } : {}}
            onClick={handler}
        >
            {text}
        </button>
    )
}
export default Button