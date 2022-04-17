import useCalculator from "../../hooks/useCalculator"
import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const Equals = ({ detail, position }: detailProps) => {
    const { result } = useCalculator()
    return (
        <Wrapper columns={1} detail={detail} position={position} >
            <Button text="=" iris={true} handler={() => result()} />
        </Wrapper>
    )
}
export default Equals