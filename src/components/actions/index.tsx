import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const Actions = ({ detail, position }: detailProps) => {
    return (
        <Wrapper detail={detail} position={position}>
            <Button text="/" />
            <Button text="х" />
            <Button text="-" />
            <Button text="+" />
        </Wrapper>
    )
}
export default Actions