import Wrapper from '../wrapper'
import styles from './display.module.scss'

const Display = () => {
    const value = 0

    return (
        <Wrapper columns={1}>
            <div className={styles.box}>
                {value}
            </div>
        </Wrapper>
    )
}
export default Display