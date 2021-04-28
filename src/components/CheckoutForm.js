// @noflow

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios';
import { useParams } from 'react-router-dom';
import BidPackIcon from '../assets/images/bid-pack-icon.png'
import BidPack1Icon from '../assets/images/bid-pack-1.png'
import BidPack2Icon from '../assets/images/bid-pack-2.png'
import BidPack3Icon from '../assets/images/bid-pack-3.png'
import BidPack4Icon from '../assets/images/bid-pack-4.png'

const StripeCheckoutForm = () => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState('');
    const stripe = useStripe();
    const elements = useElements();

    const { token_id, bid_points } = useParams();

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window
            .fetch("https://bg-be.herokuapp.com/api/v1/payments/calculate-payment-for-web-payment", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ token_id: token_id, bid_points: parseInt(bid_points) })
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                setClientSecret(data.client_secret);
            });
    }, []);

    const cardStyle = {
        style: {
            base: {
                color: "#32325d",
                fontFamily: 'Arial, sans-serif',
                fontSmoothing: "antialiased",
                fontSize: "16px",
                "::placeholder": {
                    color: "#32325d"
                }
            },
            invalid: {
                color: "#fa755a",
                iconColor: "#fa755a"
            }
        }
    };

    const handleChange = async (event) => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    const handleSubmit = async ev => {
        ev.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        });

        if (payload.error) {
            setError(`Payment failed ${payload.error.message}`);
            setProcessing(false);
        } else {
            setError(null);
            setProcessing(false);
            setSucceeded(true);
        }
    };

    return (
        <React.Fragment>
            <form id="payment-form" onSubmit={handleSubmit}>
                <CardElement id="card-element" options={cardStyle} onChange={handleChange} />
                <br />
                <button
                    disabled={processing || disabled || succeeded}
                    id="submit"
                    className="btn btn-primary"
                >
                    <span id="button-text">
                        {processing ? (
                            "Please wait..."
                        ) : (
                            "Pay now"
                        )}
                    </span>
                </button>
                <br />
                {/* Show any error that happens when processing the payment */}
                {error && (
                    <div className="card-error" role="alert">
                        {error}
                    </div>
                )}

                {/* Show a success message upon completion */}
                {
                    succeeded ?
                        <p>
                            Payment succeeded!
                    </p>
                        : null
                }
            </form>
            <br />
            {/* <p>Client Secret: {clientSecret}</p> */}
        </React.Fragment>
    );
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HWMrRLc7T29UIG88y1kmzrWU8RT3CBeotjmgJ2UeGOI9M1V5nEbNaoLEae9CEfULhWKQ73CPi57kQchh4fxXhMc00k0mkPao7');

const CheckoutForm = () => {
    const { token_id, bid_points } = useParams();
    return (
        <section id="__bid-packs-payment-mobile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="body-header">
                            <h1>BID PACKS</h1>
                            <p>JOIN THE FUN, BUY BID POINTS NOW.</p>
                            <hr />
                        </div>
                        <div className="body-content">
                            {/* <div className="text-image mb-3">
                                <div className="image">
                                    <img src={BidPackIcon} alt="BidPackIcon" />
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
                                <hr />
                            </div> */}
                            <div className="bid-pack-list">
                                {
                                    bid_points == "250" ?
                                        <div className="pack">
                                            <div className="icon">
                                                <img src={BidPack1Icon} alt="BidPack1Icon" />
                                            </div>
                                            <div className="label">
                                                <p><span>250</span> BIDS</p>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                            <div className="details">
                                                <p>Subtotal: $30.80</p>
                                            </div>
                                            <div className="details">
                                                <p>Tax: ${30.80 * 0.10}</p>
                                            </div>
                                            <div className="price">
                                                <p>Total: ${30.80 + (30.80 * 0.10)}</p>
                                            </div>
                                            <div className="details">
                                                <p>14 CENTS PER BID</p>
                                            </div>
                                        </div>
                                    :
                                    bid_points == "500" ?
                                        <div className="pack">
                                            <div className="icon">
                                                <img src={BidPack2Icon} alt="BidPack12con" />
                                            </div>
                                            <div className="label">
                                                <p><span>500</span> BIDS</p>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                            <div className="details">
                                                <p>Subtotal: $70.00</p>
                                            </div>
                                            <div className="details">
                                                <p>Tax: ${70.00 * 0.10}</p>
                                            </div>
                                            <div className="price">
                                                <p>Total: ${70.00 + (70.00 * 0.10)}</p>
                                            </div>
                                            <div className="details">
                                                <p>14 CENTS PER BID</p>
                                            </div>
                                        </div>
                                    :
                                    bid_points == "1000" ?
                                        <div className="pack">
                                            <div className="icon">
                                                <img src={BidPack3Icon} alt="BidPack3Icon" />
                                            </div>
                                            <div className="label">
                                                <p><span>1000</span> BIDS</p>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                            <div className="details">
                                                <p>Subtotal: $140.00</p>
                                            </div>
                                            <div className="details">
                                                <p>Tax: ${140.00 * 0.10}</p>
                                            </div>
                                            <div className="price">
                                                <p>Total: ${140.00 + (140.00 * 0.10)}</p>
                                            </div>
                                            <div className="details">
                                                <p>14 CENTS PER BID</p>
                                            </div>
                                        </div>
                                    :
                                    bid_points == "2000" ?
                                        <div className="pack">
                                            <div className="icon">
                                                <img src={BidPack4Icon} alt="BidPack4Icon" />
                                            </div>
                                            <div className="label">
                                                <p><span>2000</span> BIDS</p>
                                            </div>
                                            <div>
                                                <hr />
                                            </div>
                                            <div className="details">
                                                <p>Subtotal: $280.00</p>
                                            </div>
                                            <div className="details">
                                                <p>Tax: ${280.00 * 0.10}</p>
                                            </div>
                                            <div className="price">
                                                <p>Total: ${280.00 + (280.00 * 0.10)}</p>
                                            </div>
                                            <div className="details">
                                                <p>14 CENTS PER BID</p>
                                            </div>
                                        </div>
                                    :
                                    <center><p>Bid pack invalid!</p></center>
                                }
                                
                               
                                
                                
                            </div>
                        </div>

                        <div className="mt-3" style={{ 
                            // position: "relative", 
                            // height: "100vh" 
                        }}>
                            <div style={{
                                // margin: "0",
                                // width: "100%",
                                // position: "absolute",
                                // top: "50%",
                                // left: "50%",
                                // transform: "translate(-50%, -50%)",
                            }}>
                                <Elements stripe={stripePromise}>
                                    <StripeCheckoutForm />
                                </Elements>
                            </div>
                        </div>
                        <div>
                            <p>© BIDDING GROUNDS | {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CheckoutForm;