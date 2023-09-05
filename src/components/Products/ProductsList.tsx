import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import ProductsListItem from './ProductsListItem'

import productsArray from 'utils/productsArray'

type Props = {}

const ProductsList = (props: Props) => {
    return (
        <>
            <Container>
                <Row>
                    {productsArray.map(({ id, title, type, text, price }) => (
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
        </>
    )
}

export default ProductsList
