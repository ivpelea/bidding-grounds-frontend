import React, {useState} from 'react'
import { Modal, Button } from 'react-bootstrap'
import ProceedToBillingIcon from '../../assets/images/proceed-to-billing.png'
import BidPackIcon from '../../assets/images/bid-pack-icon.png'
import SelectedBidPackIcon from '../../assets/images/bid-pack-selected.png'
import UnselectedBidPackIcon from '../../assets/images/bid-pack-unselect.png'
import BidPack1Icon from '../../assets/images/bid-pack-1.png'
import BidPack2Icon from '../../assets/images/bid-pack-2.png'
import BidPack3Icon from '../../assets/images/bid-pack-3.png'
import BidPack4Icon from '../../assets/images/bid-pack-4.png'

function SelectHint(props) {
    if(props.select == true){
        return (
            <img src={SelectedBidPackIcon} alt="SelectedBidPackIcon"/>
        )
    }else {
        return (
            <img src={UnselectedBidPackIcon} alt="UnselectedBidPackIcon"/>
        )
    }
}

function BidPacks(props) {
    const [selectedPack, setSelectedPack] = useState(1);

    return (
        <Modal
            id="__bid-packs-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div className="body-header">
                    <h1>BID PACKS</h1>
                    <p>JOIN THE FUN, BUY BID POINTS NOW.</p>
                    <hr />
                </div>
                <div className="body-content">
                    <div className="text-image mb-3">
                        <div className="image">
                            <img src={BidPackIcon} alt="BidPackIcon"/>
                        </div>
                        <div className="text">
                            <p>
                                A BID PACK IS WHAT YOU NEED TO BUY TO GET STARTED WITH BIDDING. BEFORE YOU CAN TAKE PART 
                                IN AN AUCTION YOU NEED TO BUY BIDS. AS SOON AS YOU HAVE BIDS IN YOUR ACCOUNT YOU CAN 
                                START BIDDING.
                            </p>
                        </div>
                    </div>
                    <div className="text-left">
                        <p>
                            YOU OBTAIN BIDS BY PURCHASING BID PACKS. BID PACKS COME IN VARIOUS SIZES, EACH TIME YOU PLACE A BID, 
                            ONE BID IS REMOVED FROM YOUR BID BALANCE. 
                        </p>
                        <hr/>
                    </div>
                    <div className="bid-pack-list">
                        <div className="pack" onClick={() => { setSelectedPack(1) }}>
                            <div className="select-hint">
                                <SelectHint select={selectedPack == 1}/>
                            </div>
                            <div className="icon">
                                <img src={BidPack1Icon} alt="BidPack1Icon"/>
                            </div>
                            <div className="label">
                                <p><span>250</span> BIDS</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="price">
                                <p>$30.80</p>
                            </div>
                            <div className="details">
                                <p>14 CENTS PER BID</p>
                            </div>
                        </div>
                        <div className="pack" onClick={() => { setSelectedPack(2) }}>
                            <div className="select-hint">
                                <SelectHint select={selectedPack == 2}/>
                            </div>
                            <div className="icon">
                                <img src={BidPack2Icon} alt="BidPack12con"/>
                            </div>
                            <div className="label">
                                <p><span>500</span> BIDS</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="price">
                                <p>$70.00</p>
                            </div>
                            <div className="details">
                                <p>14 CENTS PER BID</p>
                            </div>
                        </div>
                        <div className="pack" onClick={() => { setSelectedPack(3) }}>
                            <div className="select-hint">
                                <SelectHint select={selectedPack == 3}/>
                            </div>
                            <div className="icon">
                                <img src={BidPack3Icon} alt="BidPack3Icon"/>
                            </div>
                            <div className="label">
                                <p><span>1000</span> BIDS</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="price">
                                <p>$140.00</p>
                            </div>
                            <div className="details">
                                <p>14 CENTS PER BID</p>
                            </div>
                        </div>
                        <div className="pack" onClick={() => { setSelectedPack(4) }}>
                            <div className="select-hint">
                                <SelectHint select={selectedPack == 4}/>
                            </div>
                            <div className="icon">
                                <img src={BidPack4Icon} alt="BidPack4Icon"/>
                            </div>
                            <div className="label">
                                <p><span>2000</span> BIDS</p>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="price">
                                <p>$280.00</p>
                            </div>
                            <div className="details">
                                <p>14 CENTS PER BID</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="body-action mt-4 mb-3">
                    <a href="#test">
                        <img src={ProceedToBillingIcon} alt="ProceedToBillingIcon" />
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

export default BidPacks
