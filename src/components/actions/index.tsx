import useCalculator from "../../hooks/useCalculator"
import { operations } from "../../interfaces/calculator"
import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const actions: operations[] = ['/', 'x', '-', '+']

const Actions = ({ detail, position }: detailProps) => {
    const { operation } = useCalculator()
    return (
        <Wrapper detail={detail} position={position}>
            {actions.map(a => (
                <Button text={a as string} handler={() => operation(a)} key={a} />
            ))}
        </Wrapper>
    )
}
export default Actions