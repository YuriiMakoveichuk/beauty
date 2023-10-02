import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'

type Props = {
    count: number
    onDecrenentClick: () => void
    onIncrenentClick: () => void
}

const Quantity = ({ count, onDecrenentClick, onIncrenentClick }: Props) => {
    return (
        <>
            {
                <div className="quantity">
                    <Button
                        className="quantity-btn"
                        onClick={() => onDecrenentClick()}
                        disabled={count <= 1}
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
