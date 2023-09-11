import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'

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
            <Card style={{ width: '250px', marginTop: '30px' }}>
                <Card.Img
                    variant="top"
                    style={{ height: '250px' }}
                    src={title}
                />
                <Card.Body>
                    <Card.Title style={{ height: '50px' }}>{type}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>ціна: {price} грн.</Card.Text>
                    <Button variant="primary">Додати у кошик</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsListItem
