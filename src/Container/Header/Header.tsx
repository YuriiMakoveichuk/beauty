import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { BsFillCartFill } from 'react-icons/bs'
import Modal from 'react-bootstrap/Modal'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.scss'
import { Link } from 'react-router-dom'
import CartHeader from 'components/CartHeader/CartHeader'
import { useState } from 'react'

type Props = {
    productsInCart: { [id: number]: number }
}

const Header = ({ productsInCart }: Props) => {
    const [smShow, setSmShow] = useState(false)

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary header">
                <Container>
                    <Navbar.Brand href="#home" className="header-title">
                        <img src="images/logo.png" alt="Fake foto" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                        className="header-btn"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse className="menu-new" id="basic-navbar-nav">
                        <Nav className="me-auto header-menu">
                            <Nav.Link>
                                <Link to={'/'}>ТОВАРИ</Link>
                            </Nav.Link>

                            <NavDropdown
                                title="КАТЕГОРІЇ"
                                id="basic-nav-dropdown"
                                className="header-category"
                            >
                                {/* <div className="header-category"> */}
                                <NavDropdown.Item>
                                    <Link to={'/bandage'}>ПОВ'ЯЗКИ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to={'/hoop'}>ОБРУЧІ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to={'/gum'}>РЕЗИНКИ ДЛЯ ВОЛОССЯ</Link>
                                </NavDropdown.Item>
                                <NavDropdown.Item>
                                    <Link to={'/point'}>
                                        УТОЧКИ ДЛЯ ВОЛОССЯ
                                    </Link>
                                </NavDropdown.Item>
                                {/* </div> */}
                            </NavDropdown>
                            <Nav.Link>
                                <Link to={'/cart'}>КОШИК</Link>
                            </Nav.Link>
                            {/* </Nav> */}
                            <BsFillCartFill
                                className="header-basket"
                                onClick={() => setSmShow(true)}
                            />
                            <Modal
                                size="sm"
                                show={smShow}
                                onHide={() => setSmShow(false)}
                                aria-labelledby="example-modal-sizes-title-sm"
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title id="example-modal-sizes-title-sm">
                                        Ваше замовлення
                                    </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    <CartHeader
                                        productsInCart={productsInCart}
                                    />
                                </Modal.Body>
                            </Modal>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
