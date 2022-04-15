import { useDispatch, useSelector } from "react-redux"
import { Mode } from "../interfaces/mode";
import { changeMode } from "../redux/mode/modeSlice";
import { RootState } from "../redux/store"

const useMode = (): { mode: Mode; changeMode: (mode: Mode) => { payload: Mode; type: string; }; } => {
    const mode: Mode = useSelector((state: RootState) => state.mode.value)
    const dispatch = useDispatch();
    const _changeMode = (mode: Mode) => dispatch(changeMode(mode))

    return { mode, changeMode: _changeMode }
}
export default useMode