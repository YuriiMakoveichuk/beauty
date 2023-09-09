import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'

// import logo from 'images/logo.png'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.scss'
import { Link } from 'react-router-dom'

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
                            <Nav.Link>
                                <Link to={'/'}> УСІ ТОВАРИ</Link>
                            </Nav.Link>

                            <NavDropdown
                                className="header-category"
                                title="КАТЕГОРІЇ"
                                id="basic-nav-dropdown"
                            >
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
                            </NavDropdown>
                            <Nav.Link>
                                <Link to={'/cart'}>КОШИК</Link>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header
