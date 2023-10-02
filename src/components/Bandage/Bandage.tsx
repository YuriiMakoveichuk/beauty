import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductsListItem from 'components/Products/ProductsListItem'

import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
}

const Bandage = ({ addProductToCart }: Props) => {
    return (
        <>
            <div className="product-text">ПОВ'ЯЗКИ</div>
            <div className="product-menu">
                <Container>
                    <Row>
                        {productsArray
                            .filter((item) => item.category === "пов'язка")
                            .map(({ id, title, type, text, price }) => (
                                <Col xs={12} md={4} xl={3} key={id}>
                                    <ProductsListItem
                                        id={id}
                                        title={title}
                                        type={type}
                                        text={text}
                                        price={price}
                                        addProductToCart={addProductToCart}
                                    />
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Bandage
