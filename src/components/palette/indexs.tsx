import Actions from '../actions';
import Display from '../display/indexs';
import Equals from '../equals';
import Symbols from '../symbols';
import styles from './palette.module.scss';

const Palette = () => {
    return (
        <div className={styles.box}>
            <Display />
            <Actions />
            <Symbols />
            <Equals />
        </div>
    )
}

export default Palette