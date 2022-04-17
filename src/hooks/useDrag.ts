import { useDispatch, useSelector } from "react-redux"
import { Idetail } from "../interfaces/details";
import { endDrag, setTarget, startDrag } from "../redux/drag/dragSlice";
import { RootState } from "../redux/store"

const useDrag = () => {
    const { item: dragItem, target: dragTarget } = useSelector((state: RootState) => state.drag)
    const dispatch = useDispatch();
    const start = (item: Idetail) => dispatch(startDrag(item))
    const end = () => dispatch(endDrag())
    const set = (item?: Idetail) => dispatch(setTarget(item))

    return { dragItem, dragTarget, startDrag: start, endDrag: end, setTarget: set }
}
export default useDrag