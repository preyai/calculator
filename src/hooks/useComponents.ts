import { useDispatch, useSelector } from "react-redux"
import { Icomponent } from "../interfaces/component";
import { Mode } from "../interfaces/mode";
import { addComponent, changeMode } from "../redux/mode/modeSlice";
import { RootState } from "../redux/store"

const useComponents = () => {
    const components = useSelector((state: RootState) => state.mode.components)
    const dispatch = useDispatch();
    const _addComponent = (component: Icomponent) => dispatch(addComponent(component))

    return { components, addComponent: _addComponent }
}
export default useComponents