import styles from './canvas.module.scss';
import { ReactComponent as PlaceholderSvg } from '../../assets/icons/placeholder.svg';

const Canvas = () => {
    return (
        <div className={styles.box}>
            <div className={styles.placeholder}>
                <PlaceholderSvg />
                <div className={styles.placeholder_title}>Перетащите сюда</div>
                <div className={styles.placeholder_text}>любой элемент из левой панели</div>
            </div>
        </div>
    )
}

export default Canvas