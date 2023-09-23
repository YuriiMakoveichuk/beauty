import { InputGroup } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

import './Products.scss'

type Props = {
    // id: number
    title: string
    type: string
    text?: string
    price: number
}

const ProductsListItem = ({ title, type, text, price }: Props) => {
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
                    <Card.Title style={{ height: '50px', fontSize: '30px' }}>
                        {type}
                    </Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>ціна: {price} грн.</Card.Text>
                    <div className="quantity">
                        <Button className="quantity-btn">-</Button>
                        <InputGroup className="quantity-input">1</InputGroup>
                        <Button className="quantity-btn">+</Button>
                    </div>

                    <Button variant="primary">Додати у кошик</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsListItem
