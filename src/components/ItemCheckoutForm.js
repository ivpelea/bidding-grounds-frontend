// @noflow

import React, { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
// import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';
import BidPackIcon from '../assets/images/bid-pack-icon.png'
import BidPack1Icon from '../assets/images/bid-pack-1.png'
import BidPack2Icon from '../assets/images/bid-pack-2.png'
import BidPack3Icon from '../assets/images/bid-pack-3.png'
import BidPack4Icon from '../assets/images/bid-pack-4.png'

const StripeCheckoutForm = (props) => {
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [processing, setProcessing] = useState('');
    const [disabled, setDisabled] = useState(true);
    const stripe = useStripe();
    const elements = useElements();
    const { paymentIntentData } = props;

    // Get redirecting linking URI to Mobile App
    const queries = useQuery();

    const redirectLinkingURI = queries.get('linkingURI');

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
        
        const { stripe_client_secret, stripe_payment_intent_id } = paymentIntentData;

        const payload = await stripe.confirmCardPayment(stripe_client_secret, {
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

            if ( redirectLinkingURI ) {
                // Redirect to app
                window.location.href = redirectLinkingURI + `payment_status=${encodeURIComponent('success')}&trans_id=${stripe_payment_intent_id}`;
            }
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
                            "PROCEED PAYMENT"
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

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51HWMrRLc7T29UIG88y1kmzrWU8RT3CBeotjmgJ2UeGOI9M1V5nEbNaoLEae9CEfULhWKQ73CPi57kQchh4fxXhMc00k0mkPao7');

const ItemCheckoutForm = () => {
    const { stripe_payment_intent_id } = useParams();
    const [paymentIntentData, setPaymentIntentData] = useState(null);
    const [isError, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        window.fetch("https://bg-be.herokuapp.com/api/v1/payments/retrieve-payment-via-intent-id", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ stripe_payment_intent_id: stripe_payment_intent_id })
            })
            .then(res => {
                return res.json();
            })
            .then(data => {
                if(data.success == false){
                   
                    setError(true);
                    setErrorMessage(data.message);
                }else{
                    setPaymentIntentData(data.payment_order);
                }
            });
    }, []);

    if(isError == true){
        return (
            <center>{errorMessage}</center>
        );
    }
    if(paymentIntentData == null){
        return (
            <center>Loading...</center>
        );
    }
    return (
        <section id="__payment-mobile">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="body-header">
                        </div>
                        <div className="body-content mt-3">
                            <div className="payment-breakdown-wrap">
                                <div className="header">
                                    <p>{paymentIntentData.item.item_name}</p>
                                </div>
                                <div className="payment-breakdown-text p-3">
                                    <p>PAYMENT BREAKDOWN</p>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="description">
                                                    AMOUNT:
                                                </td>
                                                <td className="amount">
                                                    ${paymentIntentData.sub_total_price}
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="description">
                                                    TAX ({paymentIntentData.percent_tax}%):
                                                </td>
                                                <td className="amount">
                                                    ${paymentIntentData.amount_tax}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <hr/>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <td className="description">
                                                    TOTAL:
                                                </td>
                                                <td className="amount">
                                                    ${paymentIntentData.grand_total_price}
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <br/>
                                    <p>TRANSACTION ID:</p>
                                    <p style={{color: "black", fontStyle: "unset"}}>{paymentIntentData.stripe_payment_intent_id}</p>
                                </div>
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
                                    <StripeCheckoutForm paymentIntentData={paymentIntentData}/>
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

export default ItemCheckoutForm;