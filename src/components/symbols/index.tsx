import useCalculator from "../../hooks/useCalculator"
import { detailProps } from "../../interfaces/details"
import Button from "../button"
import Wrapper from "../wrapper"

const symbols = ['7', '8', '9', '4', '5', '6', '1', '2', '3', '0', ',']

const Symbols = ({ detail, position }: detailProps) => {
    const { input } = useCalculator()
    return (
        <Wrapper columns={3} detail={detail} position={position}>
            {symbols.map(s => (
                <Button
                    text={s}
                    size={s === '0' ? '1/3' : undefined}
                    key={s}
                    handler={() => input(s)}
                />
            ))}
        </Wrapper>
    )
}
export default Symbols