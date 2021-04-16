import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import MoneyIcon1 from '../../assets/images/money1-icon.png'
import ClockIcon1 from '../../assets/images/clock1-icon.png'
import WinIcon1 from '../../assets/images/win2-icon.png'
import BidsIcon1 from '../../assets/images/bids2-icon.png'
import StartBiddingIcon from '../../assets/images/StartBiddingImg.png'
import { Link } from 'react-router-dom'

function HowBidWorks(props) {
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
                    <hr />
                </div>
                <div className="body-content-list">
                    <div className="content">
                        <div className="image">
                            <img src={MoneyIcon1} alt="MoneyIcon1" />
                        </div>
                        <div className="text">
                            <p>EACH AUCTION STARTS AT $0. <br /><span>EACH BID PLACED ADDS 1 PENNY TO THE AUCTION PRICE.</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={ClockIcon1} alt="ClockIcon1" />
                        </div>
                        <div className="text">
                            <p>THE AUCTION CLOCK. <br /><span>RESTARTS FROM 10 SECONDS EVERYTIME SOMEONE BIDS.</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={WinIcon1} alt="WinIcon1" />
                        </div>
                        <div className="text">
                            <p>IF NO NEW BIDS BEFORE THE CLOCK RUNS OUT, <br /><span>THE LAST BIDDER WINS.</span></p>
                        </div>
                    </div>
                    <div className="content">
                        <div className="image">
                            <img src={BidsIcon1} alt="BidsIcon1" />
                        </div>
                        <div className="text">
                            <p>BEFORE YOU TAKE PART IN ANY AUCTION YOU NEED TO BUY BID POINTS. <br /><span>BIDS ARE CURRENTLY ONSALE FOR 13 CENTS EACH.</span></p>
                        </div>
                    </div>
                </div>
                <div className="body-action mt-5 mb-5">
                    <Link to="/">
                        <img src={StartBiddingIcon} alt="StartBiddingIcon" />
                    </Link>
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

export default HowBidWorks
