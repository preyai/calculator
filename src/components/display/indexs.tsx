import { Icomponent } from '../../interfaces/component'
import Wrapper from '../wrapper'
import styles from './display.module.scss'

const Display = () => {
    const value = 0
    const component: Icomponent = { title: 'DISPLAY' }
    return (
        <Wrapper columns={1} component={component}>
            <div className={styles.box}>
                {value}
            </div>
        </Wrapper>
    )
}
export default Display