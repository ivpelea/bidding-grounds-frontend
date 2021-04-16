import React, {useState} from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import HeaderIcon from '../assets/images/HeaderLogo.png'
import {Modal, Button} from 'react-bootstrap'
import MoneyIcon1 from '../assets/images/money1-icon.png'
import ClockIcon1 from '../assets/images/clock1-icon.png'
import WinIcon1 from '../assets/images/win2-icon.png'
import BidsIcon1 from '../assets/images/bids2-icon.png'
import StartBiddingIcon from '../assets/images/StartBiddingImg.png'

function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        id="__how-bid-works-modal"
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body className="text-center">
            <div className="body-header">
                <h1>HOW <span>BIDDING GROUNDS</span> WORKS</h1>
                <p>START BUYING FOR LESS. HERE'S HOW.</p>
                <hr/>
            </div>
            <div className="body-content-list">
                <div className="content">
                    <div className="image">
                        <img src={MoneyIcon1} alt="MoneyIcon1"/>
                    </div>
                    <div className="text">
                        <p>EACH AUCTION STARTS AT $0. <br/><span>EACH BID PLACED ADDS 1 PENNY TO THE AUCTION PRICE.</span></p>
                    </div>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={ClockIcon1} alt="ClockIcon1"/>
                    </div>
                    <div className="text">
                        <p>THE AUCTION CLOCK. <br/><span>RESTARTS FROM 10 SECONDS EVERYTIME SOMEONE BIDS.</span></p>
                    </div>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={WinIcon1} alt="WinIcon1"/>
                    </div>
                    <div className="text">
                        <p>IF NO NEW BIDS BEFORE THE CLOCK RUNS OUT, <br/><span>THE LAST BIDDER WINS.</span></p>
                    </div>
                </div>
                <div className="content">
                    <div className="image">
                        <img src={BidsIcon1} alt="BidsIcon1"/>
                    </div>
                    <div className="text">
                        <p>BEFORE YOU TAKE PART IN ANY AUCTION YOU NEED TO BUY BID POINTS. <br/><span>BIDS ARE CURRENTLY ONSALE FOR 13 CENTS EACH.</span></p>
                    </div>
                </div>
            </div>
            <div className="body-action mt-5 mb-5">
                <a href="#test">
                    <img src={StartBiddingIcon} alt="StartBiddingIcon"/>
                </a>
            </div>
            <div>
                <p>© BIDDING GROUNDS | {new Date().getFullYear()}</p>
            </div>
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    );
}
function Header() {
    const [modalShow, setModalShow] = React.useState(false);
    const showModal = (e) => {
        e.preventDefault();
        setModalShow(true);
    }
    return (
        <React.Fragment> 
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
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
                                        <Nav.Link href="#how-it-works" onClick={showModal.bind(this)}>HOW IT WORKS</Nav.Link>
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
        </React.Fragment>
    )
}

export default Header
