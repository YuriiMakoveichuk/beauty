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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={title} />
                <Card.Body>
                    <Card.Title>{type}</Card.Title>
                    <Card.Text>{text}</Card.Text>
                    <Card.Text>ціна: {price} грн.</Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>
        </>
    )
}

export default ProductsListItem
