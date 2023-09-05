import Container from 'react-bootstrap/Container'

import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { BsTelephone } from 'react-icons/bs'
import { TfiEmail } from 'react-icons/tfi'

import 'bootstrap/dist/css/bootstrap.min.css'
import './Header.scss'

type Props = {}

const TopHeader = (props: Props) => {
    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary top-header">
                <Container>
                    <Navbar.Brand href="#home"></Navbar.Brand>
                    <Navbar.Toggle
                        className="top-header-btn"
                        aria-controls="basic-navbar-nav"
                    />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto top-header-contacts">
                            <Nav.Link href="#home" className="header-contacts ">
                                <BsTelephone className="header-contacts-icons" />
                                +380677983989
                            </Nav.Link>
                            <Nav.Link href="#link" className="header-contacts ">
                                <TfiEmail className="header-contacts-icons" />
                                snake77778@gmail.com
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default TopHeader
