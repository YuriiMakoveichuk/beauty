import { Product } from 'utils/productsArray'

type Props = { product: Product; productCount: number }

const CartProductListItem = ({ product, productCount }: Props) => {
    return (
        <div>
            {product.type}: {productCount} * {product.price}
        </div>
    )
}

export default CartProductListItem
