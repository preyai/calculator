import useCalculator from '../../hooks/useCalculator'
import { detailProps, Idetail } from '../../interfaces/details'
import Wrapper from '../wrapper'
import styles from './display.module.scss'

const Display = ({ detail, position }: detailProps) => {
    const { currentValue: value } = useCalculator()
    return (
        <Wrapper columns={1} detail={detail} position={position}>
            <div className={styles.box} >
                <span style={{ fontSize: `${100 - value.length * 3}%` }}>{value}</span>
            </div>
        </Wrapper>
    )
}
export default Display