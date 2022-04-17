
import { useDispatch, useSelector } from "react-redux"
import { operations } from "../interfaces/calculator";
import { input, operation, result } from "../redux/calculator/calculatorSlice";
import { RootState } from "../redux/store"

const useCalculator = () => {
    const { previousValue, currentValue } = useSelector((state: RootState) => state.calculator)
    const dispatch = useDispatch();
    const _input = (s: string) => dispatch(input(s))
    const _operation = (o: operations) => dispatch(operation(o))
    const _result = () => dispatch(result())

    return { currentValue, input: _input, operation: _operation, result: _result }
}
export default useCalculator