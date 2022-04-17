import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const Symbols = ({ detail, position }: detailProps) => {
    return (
        <Wrapper columns={3} detail={detail} position={position}>
            <Button text="7" />
            <Button text="8" />
            <Button text="9" />
            <Button text="4" />
            <Button text="5" />
            <Button text="6" />
            <Button text="1" />
            <Button text="2" />
            <Button text="3" />
            <Button text="0" size={'1/3'} />
            <Button text="," />
        </Wrapper>
    )
}
export default Symbols