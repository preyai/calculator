import Actions from "../components/actions";
import Display from "../components/display/indexs";
import Equals from "../components/equals";
import Symbols from "../components/symbols";
import { detailTitle, Idetail } from "../interfaces/details";

export const getIDetail = (name: detailTitle) => {
    const detail: Idetail = {
        title: name
    }

    return detail
}

export const getDetailElement = (detail: Idetail) => {

    switch (detail.title) {
        case 'DISPLAY':
            return Display
        case 'ACTIONS':
            return Actions
        case 'SYMBOLS':
            return Symbols
        case 'EQUALS':
            return Equals
        default:
            return undefined
    }
}