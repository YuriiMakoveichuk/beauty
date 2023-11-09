import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductsListItem from 'components/Products/ProductsListItem'

import productsArray from 'utils/productsArray'

type Props = {
    addProductToCart: (id: number, count: number) => void
    minCount: number
}

const Hoop = ({ addProductToCart, minCount }: Props) => {
    return (
        <>
            <div className="product-text"> ОБРУЧІ</div>
            <div className="product-menu">
                <Container>
                    <Row>
                        {productsArray
                            .filter((item) => item.category === 'обруч')
                            .map(({ id, title, type, text, price }) => (
                                <Col xs={12} md={6} lg={4} xl={3} key={id}>
                                    <ProductsListItem
                                        id={id}
                                        title={title}
                                        type={type}
                                        text={text}
                                        price={price}
                                        addProductToCart={addProductToCart}
                                        minCount={minCount}
                                    />
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Hoop
