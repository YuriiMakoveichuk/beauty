import productsArray, { Product, getProductsObject } from 'utils/productsArray'

type Props = {
    productsInCart: { [id: number]: number }
    productsObject?: { [id: number]: Product }
}

const CartTotal = ({
    productsInCart,
    productsObject = getProductsObject(productsArray),
}: Props) => {
    return (
        <div>
            ВСЬОГО:
            {Object.keys(productsInCart).reduce(
                (total, productId) =>
                    total +
                    productsInCart[parseInt(productId)] *
                        productsObject[parseInt(productId)].price,
                0
            )}{' '}
            грн.
        </div>
    )
}

export default CartTotal
