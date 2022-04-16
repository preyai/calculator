import styles from './canvas.module.scss';
import { ReactComponent as PlaceholderSvg } from '../../assets/icons/placeholder.svg';
import useComponents from '../../hooks/useComponents';
import { DragEventHandler } from 'react';
import { componentTitle } from '../../interfaces/component';

const Canvas = () => {
    const { components, addComponent } = useComponents()

    const onDrop: DragEventHandler = (e) => {
        const component: componentTitle = e.dataTransfer.getData('component') as componentTitle
        if (component)
            addComponent({ title: component })

    };
    return (
        <div
            className={styles.dropZone}
            onDragOver={(e) => { e.preventDefault() }}
            onDrop={onDrop}
        >
            {components.length > 0 ?
                components.map(i => (
                    <>
                        {i.title}
                    </>
                ))
                :
                <div className={styles.placeholder}>
                    <PlaceholderSvg />
                    <div className={styles.placeholder_title}>Перетащите сюда</div>
                    <div className={styles.placeholder_text}>любой элемент из левой панели</div>
                </div>
            }
        </div>
    )
}

export default Canvas