import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductsListItem from 'components/Products/ProductsListItem'

import productsArray from 'utils/productsArray'

type Props = {}

const Gum = (props: Props) => {
    return (
        <>
            <div className="product-text"> РЕЗИНКИ ДЛЯ ВОЛОССЯ</div>
            <div className="product-menu">
                <Container>
                    <Row>
                        {productsArray
                            .filter((item) => item.category === 'резинка')
                            .map(({ id, title, type, text, price }) => (
                                <Col xs={12} md={4} xl={3} key={id}>
                                    <ProductsListItem
                                        // id={id}
                                        title={title}
                                        type={type}
                                        text={text}
                                        price={price}
                                    />
                                </Col>
                            ))}
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Gum
