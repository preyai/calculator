import { DragEvent, useState } from 'react';
import Display from '../display';
import styles from './draggable.module.scss';

const Draggable = () => {
    const [isDragging, setIsDragging] = useState<Boolean>(false)

    const startDrag = (e: DragEvent) => {
        console.log('startDrag')
        // e.dataTransfer.setData('Element', Display.name)
        setIsDragging(true)
    }
    const endDrag = (event: any) => {
        console.log(event)
        setIsDragging(false)
    }

    return (
        <div
            onDragStart={startDrag}
            onDragEnd={endDrag}
            // onDrop={drop}
            draggable
        // className={[styles.box, isDragging ? styles.isDragging : ''].join(' ')}
        >
            <Display />
        </div>
    )
}

export default Draggable