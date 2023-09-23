import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row'

import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import { Link } from 'react-router-dom'

import './Price.scss'

type Props = {}

const Price = (props: Props) => {
    return (
        <>
            <div className="price">
                <Container>
                    <Row style={{ justifyContent: 'space-evenly' }}>
                        <Card className="price-card">
                            <Card.Img
                                className="price-img"
                                src="./images/o_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title style={{ height: '50px' }}>
                                    ОБРУЧІ
                                </Card.Title>

                                <Button variant="primary" className="price-btn">
                                    <Link to={'/hoop'}>Перейти до розділу</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="price-card">
                            <Card.Img
                                className="price-img"
                                variant="top"
                                src="./images/p_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title style={{ height: '50px' }}>
                                    ПОВ'ЯЗКИ
                                </Card.Title>

                                <Button variant="primary" className="price-btn">
                                    <Link to={'/bandage'}>
                                        Перейти до розділу
                                    </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="price-card">
                            <Card.Img
                                className="price-img"
                                variant="top"
                                src="./images/r_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title style={{ height: '50px' }}>
                                    РЕЗИНКИ
                                </Card.Title>

                                <Button variant="primary" className="price-btn">
                                    <Link to={'/gum'}>Перейти до розділу</Link>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className="price-card">
                            <Card.Img
                                className="price-img"
                                variant="top"
                                src="./images/y_1.jpg"
                            />
                            <Card.Body>
                                <Card.Title style={{ height: '50px' }}>
                                    УТОЧКИ
                                </Card.Title>

                                <Button variant="primary" className="price-btn">
                                    <Link to={'/point'}>
                                        Перейти до розділу
                                    </Link>
                                </Button>
                            </Card.Body>
                        </Card>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Price
