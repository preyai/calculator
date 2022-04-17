import { getDetailElement } from '../../helpers/details';
import useDetails from '../../hooks/useDetails';
import styles from './palette.module.scss';

const POSITION = 'PALETTE'

const Palette = () => {
    const { palete } = useDetails()
    return (
        <div className={styles.box}>
            {palete.map(detail => {
                const El = getDetailElement(detail)
                if (El)
                    return (
                        <El detail={detail} position={POSITION} key={detail.title} />
                    )
            })}
        </div>
    )
}

export default Palette