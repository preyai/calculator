import { DragEventHandler, PropsWithChildren, useEffect, useRef, useState } from 'react'
import useDetails from '../../hooks/useDetails'
import useDrag from '../../hooks/useDrag'
import useMode from '../../hooks/useMode'
import { detailPosition, Idetail } from '../../interfaces/details'
import styles from './wrapper.module.scss'

interface WrapperProps {
    columns?: number,
    detail: Idetail,
    position: detailPosition
}

function Wrapper({ children, columns = 4, detail, position }: PropsWithChildren<WrapperProps>) {
    const [active, setActive] = useState(false)
    const { mode } = useMode()
    const { details, removeDetail } = useDetails()
    const { dragItem, dragTarget, startDrag, endDrag, setTarget } = useDrag()
    const div = useRef<HTMLHeadingElement>(null)

    useEffect(() => {
        setActive(position === 'CANVAS' || !details.includes(detail) && !(position === 'PALETTE' && mode === 'runtime'))
    }, [mode, details])

    const dragOver: DragEventHandler = (e) => {
        if (dragItem !== detail) {
            e.preventDefault()
        }
    }
    const dragEnter: DragEventHandler = (e) => {
        e.preventDefault()
        if (position === 'CANVAS' && dragItem && dragItem.title !== 'DISPLAY') {
            if (detail.title === 'DISPLAY' && details.length > 1)
                setTarget(details[1])
            else
                setTarget(detail)
        }
    }
    const dragLeave: DragEventHandler = (e) => {
        e.preventDefault()
        if (dragItem !== detail && dragItem?.title != 'DISPLAY') {
            setTarget(undefined)
        }
    }

    const dragStart = () => {
        startDrag(detail)
        if (detail.title === 'DISPLAY' && details.length > 0)
            setTarget(details[0])

    }

    const dragEnd = () => {
        endDrag()
    }

    const ddClick = () => {
        if (mode === 'constructor' && detail && details.includes(detail))
            removeDetail(detail)
    }

    const getClassNames = () => {
        const classNames = [styles.box]
        if (position === 'PALETTE')
            classNames.push(styles.shadow)
        if (!active)
            classNames.push(styles.unactive)
        if (mode === 'constructor')
            classNames.push(styles.draggable)
        return classNames.join(' ')
    }

    return (
        <div
            ref={div}
            className={getClassNames()}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            draggable={active && mode === 'constructor' && !(position === 'CANVAS' && detail.title === 'DISPLAY')}
            onDragOver={dragOver}
            onDragEnter={dragEnter}
            onDragLeave={dragLeave}
            onDragStart={dragStart}
            onDragEnd={dragEnd}
            onDoubleClick={ddClick}
        >
            {children}
            {position === 'CANVAS' && detail === dragTarget &&
                <div className={styles.target} />
            }
        </div>
    )
}
export default Wrapper