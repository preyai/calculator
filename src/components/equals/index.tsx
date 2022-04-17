import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const Equals = ({ detail, position }: detailProps) => {
    return (
        <Wrapper columns={1} detail={detail} position={position}>
            <Button text="=" iris={true} />
        </Wrapper>
    )
}
export default Equals