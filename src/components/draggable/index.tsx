import { DragEvent, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDrag } from '../../redux/counter/dragSlice';
import { RootState } from '../../redux/store';
import Display from '../display';
import styles from './draggable.module.scss';

const Draggable = () => {
    const [isDragging, setIsDragging] = useState<Boolean>(false)
    const drag = useSelector<RootState>((state) => state.drag)
    const dispatch = useDispatch();

    const startDrag = (e: DragEvent) => {
        console.log('startDrag')
        dispatch(setDrag(Display))
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