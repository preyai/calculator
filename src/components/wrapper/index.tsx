import { DragEventHandler, PropsWithChildren } from 'react'
import useMode from '../../hooks/useMode'
import { Icomponent } from '../../interfaces/component'
import styles from './wrapper.module.scss'

interface WrapperProps {
    columns?: number,
    component?: Icomponent
}

function Wrapper({ children, columns = 4, component }: PropsWithChildren<WrapperProps>) {
    const { mode } = useMode()
    const dragStart: DragEventHandler = (e) => {
        if (component)
            e.dataTransfer.setData('component', component.title)
    }
    return (
        <div
            className={styles.box}
            style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
            draggable={mode === 'constructor'}
            onDragStart={dragStart}
            onDragEnd={(e) => { e.preventDefault() }}

        >
            {children}
        </div>
    )
}
export default Wrapper