import { DragEvent, useState } from 'react';
import styles from './canvas.module.scss';

const Canvas = () => {
    const [Element, setElement] = useState<() => JSX.Element>()

    const dragOver = (e: DragEvent) => {
        e.preventDefault()
        // e.dataTransfer.setData('text', e.target)
    }

    const drop = (e: DragEvent) => {
        // const El = (e.dataTransfer.getData('Element'))
        // setElement(El)

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