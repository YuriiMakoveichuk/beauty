import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { useState } from 'react'

import Quantity from 'components/Quantity/Quantity'

import './Products.scss'

type Props = {
    id: number
    title: string
    type: string
    text?: string
    price: number
    addProductToCart: (id: number, count: number) => void
    minCount: number
}

const ProductsListItem = ({
    id,
    title,
    type,
    text,
    price,
    addProductToCart,
    minCount,
}: Props) => {
    const [count, setCount] = useState<number>(1)

    const onDecrenentClick = () => {
        setCount((prevState) => prevState - 1)
    }

    const onIncrenentClick = () => {
        setCount((prevState) => prevState + 1)
    }

    return (
        <>
            <Card
                style={{
                    width: '250px',
                    marginTop: '30px',
                    marginBottom: '30px',
                    backgroundColor: 'rgb(217, 247, 243)',
                }}
            >
                <Card.Img
                    variant="top"
                    style={{ height: '250px' }}
                    src={title}
                />
                <Card.Body
                    style={{ display: 'grid', justifyContent: 'center' }}
                >
                    <Card.Title style={{ fontSize: '30px' }}>{type}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>ціна: {price} грн.</Card.Text>
                    <Quantity
                        count={count}
                        onDecrenentClick={onDecrenentClick}
                        onIncrenentClick={onIncrenentClick}
                        minCount={1}
                    />
                    <Button
                        variant="primary"
                        onClick={() => addProductToCart(id, count)}
                    >
                        Додати у кошик
                    </Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsListItem
