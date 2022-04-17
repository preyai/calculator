import styles from './canvas.module.scss';
import { ReactComponent as PlaceholderSvg } from '../../assets/icons/placeholder.svg';
import { DragEventHandler, useEffect, useState } from 'react';
import useDetails from '../../hooks/useDetails';
import { detailTitle } from '../../interfaces/details';
import useDrag from '../../hooks/useDrag';
import { getDetailElement } from '../../helpers/details';

const POSITION = 'CANVAS'

const Canvas = () => {
    const [list, setList] = useState([])
    const [isActive, setIsaActive] = useState(false)
    const { details, addDetail } = useDetails()
    const { dragItem, dragTarget } = useDrag()

    const onDrop: DragEventHandler = (e) => {
        setIsaActive(false)
        if (dragItem)
            addDetail(dragItem, dragTarget)

    };
    const odDragOver: DragEventHandler = (e) => {
        e.preventDefault()
        if (!isActive)
            setIsaActive(true)
    }

    const dragLeave: DragEventHandler = (e) => {
        e.preventDefault()
        setIsaActive(false)
    }

    return (
        <div
            className={styles.dropZone}
            onDragOver={odDragOver}
            onDrop={onDrop}
            onDragLeave={dragLeave}
        >
            {details.length > 0 ?
                <>
                    {details.map(i => {
                        const El = getDetailElement(i)
                        if (El)
                            return (
                                <El detail={i} position={POSITION} key={i.title} />
                            )
                    })}
                    {isActive && !dragTarget &&
                        <div className={styles.target}></div>
                    }
                </>
                :
                <div className={[styles.placeholder, (isActive && dragItem) ? styles.active : ''].join(' ')}>
                    <PlaceholderSvg />
                    <div className={styles.placeholder_title}>Перетащите сюда</div>
                    <div className={styles.placeholder_text}>любой элемент из левой панели</div>
                </div>
            }
        </div>
    )
}

export default Canvas