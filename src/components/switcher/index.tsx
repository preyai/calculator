import styles from './switcher.module.scss'
import { ReactComponent as YeySvg } from '../../assets/icons/eye.svg';
import { ReactComponent as SelectorSvg } from '../../assets/icons/selector.svg';
import useMode from '../../hooks/useMode';
import React from 'react';

const RUNTIME = 'runtime'
const CONSTRUCTOR = 'constructor'

const Switcher = () => {
    const { mode, changeMode } = useMode()
    return (
        <div className={styles.box}>
            <Btn title={RUNTIME} active={mode === RUNTIME} handler={() => changeMode(RUNTIME)} Icon={YeySvg} />
            <Btn title={CONSTRUCTOR} active={mode === CONSTRUCTOR} handler={() => changeMode(CONSTRUCTOR)} Icon={SelectorSvg} />
            {/* <div className={[styles.btn, styles.active].join(' ')}>
                <SelectorSvg stroke='#4D5562' />
                Constructor
            </div> */}
        </div>
    )
}

interface BtnProps {
    title: string,
    active?: boolean,
    handler: () => {},
    Icon: React.FunctionComponent<React.SVGProps<SVGSVGElement>>
}

const Btn = ({ title, active, handler, Icon }: BtnProps) => {
    return (
        <div className={[styles.btn, active ? styles.active : ''].join(' ')} onClick={handler}>

            <Icon stroke={active ? '#5D5FEF' : '#4D5562'} />
            {title}
        </div>
    )
}
export default Switcher