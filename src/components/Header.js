import React from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import HeaderIcon from '../assets/images/HeaderLogo.png'
function Header() {
    return (
        <section id="__bidding-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        {/* <center>test</center> */}
                        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                            <Navbar.Brand href="#home"><img src={HeaderIcon} alt="HeaderIcon"/></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                                {/* CENTER NAV MENU */}
                                <Nav className="mx-auto">
                                    <Nav.Link href="#start-bidding">START BIDDING</Nav.Link>
                                    <Nav.Link href="#item-showroom">ITEM SHOWROOM</Nav.Link>
                                    <Nav.Link href="#how-it-works">HOW IT WORKS</Nav.Link>
                                    <Nav.Link href="#bid-packs">BID PACKS</Nav.Link>
                                    </Nav>
                                <Nav>
                                    <Nav.Link href="#deets">SIGN UP</Nav.Link>
                                    <p>|</p>
                                    <Nav.Link href="#deets">SIGN IN</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Header
