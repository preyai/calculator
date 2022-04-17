import { useDispatch, useSelector } from "react-redux"
import { Idetail } from "../interfaces/details";
import { addDetail, removeDetail } from "../redux/details/detailsSlice";
import { RootState } from "../redux/store"

const useDetails = () => {
    const { list: details, palete } = useSelector((state: RootState) => state.details)
    const dispatch = useDispatch();
    const add = (detail: Idetail, target?: Idetail) => dispatch(addDetail({ detail, target }))
    const remove = (detail: Idetail) => dispatch(removeDetail(detail))

    return { details, palete, addDetail: add, removeDetail: remove }
}
export default useDetails