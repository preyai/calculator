import { detailProps, Idetail } from '../../interfaces/details'
import Wrapper from '../wrapper'
import styles from './display.module.scss'

const Display = ({ detail, position }: detailProps) => {
    const value = 0
    return (
        <Wrapper columns={1} detail={detail} position={position}>
            <div className={styles.box}>
                {value}
            </div>
        </Wrapper>
    )
}
export default Display