
export type detailTitle = 'DISPLAY' | 'ACTIONS' | 'SYMBOLS' | 'EQUALS';
export type detailPosition = 'CANVAS' | 'PALETTE';

export interface Idetail {
    title: detailTitle,
    index?: number
}

export interface detailsState {
    list: Idetail[],
    palete: Idetail[]
}

export interface detailProps {
    detail: Idetail,
    position: detailPosition
}