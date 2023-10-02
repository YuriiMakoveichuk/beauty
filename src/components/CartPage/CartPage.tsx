import CartProductList from 'components/CartProductList/CartProductList'
import CartProductListItemExtended from 'components/CartProductList/CartProductListItemExtended'
import CartTotal from 'components/CartTotal/CartTotal'
import { Container, Row } from 'react-bootstrap'

type Props = {
    productsInCart: { [id: number]: number }
    removeProductFromCart: (id: number) => void
    changeProductQuantity: (id: number, count: number) => void
}

const CartPage = ({
    productsInCart,
    removeProductFromCart,
    changeProductQuantity,
}: Props) => {
    return (
        <>
            <div className="product-text">ВАШЕ ЗАМОВЛЕННЯ</div>
            <div className="product-menu">
                <Container>
                    <Row xs={12} sm={2} md={3} xl={4}>
                        <CartProductList
                            productsInCart={productsInCart}
                            CartItem={CartProductListItemExtended}
                            removeProductFromCart={removeProductFromCart}
                            changeProductQuantity={changeProductQuantity}
                        />
                    </Row>

                    <CartTotal productsInCart={productsInCart} />
                </Container>
            </div>
        </>
    )
}
export default CartPage
