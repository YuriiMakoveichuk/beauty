import { Product } from 'utils/productsArray'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Quantity from 'components/Quantity/Quantity'

// import './Products.scss'

type Props = {
    id: number
    product: Product
    productCount: number
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartProductListItemExtended = ({
    id,
    product,
    productCount,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <div>
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
                    src={product.title}
                />
                <Card.Body
                    style={{ display: 'grid', justifyContent: 'center' }}
                >
                    <Card.Title style={{ height: '50px', fontSize: '30px' }}>
                        {product.type}
                    </Card.Title>
                    <Card.Text>кількість: {productCount} шт.</Card.Text>
                    <Card.Text>ціна за штуку: {product.price} грн.</Card.Text>
                    <Quantity
                        count={productCount}
                        onDecrenentClick={() =>
                            changeProductQuantity(product.id, productCount - 1)
                        }
                        onIncrenentClick={() =>
                            changeProductQuantity(product.id, productCount + 1)
                        }
                    />
                    <Button
                        variant="primary"
                        onClick={() => removeProductFromCart(product.id)}
                    >
                        Видалити
                    </Button>
                </Card.Body>
            </Card>
        </div>
    )
}

export default CartProductListItemExtended
