import { getDetailElement } from '../../helpers/details';
import useDetails from '../../hooks/useDetails';
import useMode from '../../hooks/useMode';
import styles from './palette.module.scss';

const POSITION = 'PALETTE'

const Palette = () => {
    const { mode } = useMode()
    const { palete } = useDetails()
    return (
        <div className={styles.box} style={mode === 'runtime' ? { opacity: 0 } : {}}>
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