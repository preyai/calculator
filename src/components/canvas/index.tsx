import { DragEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import styles from './canvas.module.scss';

const Canvas = () => {
    const [Element, setElement] = useState<() => JSX.Element>()
    const drag = useSelector<RootState>((state) => state.drag)
    const dragOver = (e: DragEvent) => {
        e.preventDefault()
        // e.dataTransfer.setData('text', e.target)
    }

    const drop = (e: DragEvent) => {
        // const El = (e.dataTransfer.getData('Element'))
        setElement(drag)
        console.log(drag);

    }
    return (
        <div
            className={styles.box}
            onDragOver={dragOver}
            onDrop={drop}
        >
            {Element ? () => <Element /> : <>2</>}
        </div>
    )
}

export default Canvas