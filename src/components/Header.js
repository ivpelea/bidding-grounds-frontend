import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import HeaderIcon from '../assets/images/HeaderLogo.png'
import BidPacks from './Modals/BidPacks';
import HowBidWorks from './Modals/HowBidWorks';
import SignIn from './Modals/SignIn';
import SignUp from './Modals/SignUp';
import { useSelector, useDispatch } from 'react-redux';
import { logout, dispatchUserData } from '../redux/actions/user/login';

function Header() {
    const userDetails = useSelector(state => state.user)
    const dispatch = useDispatch();

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

    const handleUserLogout = async (e) => {
        e.preventDefault();
        const logoutResponse = await Promise.resolve(logout());
        dispatch(dispatchUserData(null));
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
                hide={setShowUserSignUp}
            />
            
            <SignIn 
                show={showUserSignIn}
                onHide={() => setShowUserSignIn(false)}
                hide={setShowUserSignIn}
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
                                        <Link to="/" className="nav-link">START BIDDING</Link>
                                        <Link to="/item-showroom" className="nav-link">ITEM SHOWROOM</Link>
                                        <Nav.Link href="#how-it-works" onClick={handleShowHowBidWorks.bind(this)}>HOW IT WORKS</Nav.Link>
                                        <Nav.Link href="#bid-packs" onClick={handleShowBidPacks.bind(this)}>BID PACKS</Nav.Link>
                                    </Nav>
                                    {
                                        userDetails.user_data != null ?
                                        <Nav>
                                            <Link to="/account-dashboard" className="nav-link"><img src="https://i.imgur.com/6gd28Rk.png" alt="https://imgur.com/n7CU8CG"/> {userDetails.user_data.username}</Link>
                                            <p>|</p>
                                            <Nav.Link href="#deets" onClick={handleShowBidPacks.bind(this)}><img src="https://i.imgur.com/n7CU8CG.png" alt="https://imgur.com/n7CU8CG"/> BIDS LEFT: {userDetails.user_data.bid_points}</Nav.Link>
                                            <p>|</p>
                                            <Nav.Link onClick={handleUserLogout.bind(this)}>SIGN OUT</Nav.Link>
                                        </Nav>
                                        
                                        :
                                        <Nav>
                                            <Nav.Link href="#deets" onClick={handleShowUserSignUp.bind(this)}>SIGN UP</Nav.Link>
                                            <p>|</p>
                                            <Nav.Link href="#deets" onClick={handleShowUserSignIn.bind(this)}>SIGN IN</Nav.Link>
                                        </Nav>
                                    }
                                    
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
