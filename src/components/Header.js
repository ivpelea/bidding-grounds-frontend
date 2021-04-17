import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import HeaderIcon from '../assets/images/HeaderLogo.png'
import BidPacks from './Modals/BidPacks';
import HowBidWorks from './Modals/HowBidWorks';
import SignIn from './Modals/SignIn';
import SignUp from './Modals/SignUp';

function Header() {
    const [showHowBidWorks, setShowHowBidWorks] = useState(false);
    const [showBidPacks, setShowBidPacks] = useState(false);
    const [showUserSignUp, setShowUserSignUp] = useState(false);
    const [showUserSignIn, setShowUserSignIn] = useState(false);

    const handleShowHowBidWorks = (e) => {
        e.preventDefault();
        setShowHowBidWorks(true);
    }
    const handleShowBidPacks = (e) => {
        e.preventDefault();
        setShowBidPacks(true);
    }
    const handleShowUserSignUp = (e) => {
        e.preventDefault();
        setShowUserSignUp(true);
    }
    const handleShowUserSignIn = (e) => {
        e.preventDefault();
        setShowUserSignIn(true);
    }
    return (
        <React.Fragment> 
            <HowBidWorks 
                show={showHowBidWorks}
                onHide={() => setShowHowBidWorks(false)}
            />
            <BidPacks 
                show={showBidPacks}
                onHide={() => setShowBidPacks(false)}
            />
            <SignUp 
                show={showUserSignUp}
                onHide={() => setShowUserSignUp(false)}
            />
            
            <SignIn 
                show={showUserSignIn}
                onHide={() => setShowUserSignIn(false)}
            />
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
                                        <Nav.Link href="/">START BIDDING</Nav.Link>
                                        <Nav.Link href="/item-showroom">ITEM SHOWROOM</Nav.Link>
                                        <Nav.Link href="#how-it-works" onClick={handleShowHowBidWorks.bind(this)}>HOW IT WORKS</Nav.Link>
                                        <Nav.Link href="#bid-packs" onClick={handleShowBidPacks.bind(this)}>BID PACKS</Nav.Link>
                                        </Nav>
                                    <Nav>
                                        <Nav.Link href="#deets" onClick={handleShowUserSignUp.bind(this)}>SIGN UP</Nav.Link>
                                        <p>|</p>
                                        <Nav.Link href="#deets" onClick={handleShowUserSignIn.bind(this)}>SIGN IN</Nav.Link>
                                    </Nav>
                                </Navbar.Collapse>
                            </Navbar>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Header
