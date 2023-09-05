import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

// import logo from 'images/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.scss'

type Props = {}

const Header = (props: Props) => {
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
                            <Nav.Link href="#home">ПОЧАТОК</Nav.Link>

                            <NavDropdown
                                className="header-category"
                                title="КАТЕГОРІЇ"
                                id="basic-nav-dropdown"
                            >
                                <NavDropdown.Item href="#action/3.1">
                                    ПОВ'ЯЗКИ
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    ОБРУЧІ
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">
                                    ГУМКИ ДЛЯ ВОЛОССЯ
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="#link">КОШИК</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
