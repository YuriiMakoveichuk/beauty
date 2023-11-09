import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

type Props = {
    count: number
    onDecrenentClick: () => void
    onIncrenentClick: () => void
    minCount: number
}

const Quantity = ({
    count,
    onDecrenentClick,
    onIncrenentClick,
    minCount,
}: Props) => {
    return (
        <>
            {
                <div className="quantity">
                    <Button
                        className="quantity-btn"
                        onClick={() => onDecrenentClick()}
                        disabled={count <= minCount}
                    >
                        -
                    </Button>
                    <InputGroup className="quantity-input">{count}</InputGroup>
                    <Button
                        className="quantity-btn"
                        onClick={() => onIncrenentClick()}
                    >
                        +
                    </Button>
                </div>
            }
        </>
    )
}

export default Quantity
