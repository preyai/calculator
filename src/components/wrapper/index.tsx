import { PropsWithChildren } from 'react'
import styles from './wrapper.module.scss'

interface WrapperProps {
    columns?: number
}

function Wrapper({ children, columns = 4 }: PropsWithChildren<WrapperProps>) {
    return (
        <div
            className={styles.box}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            draggable
        >
            {children}
        </div>
    )
}
export default Wrapper