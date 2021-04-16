import React from 'react'
import FBIcon from '../assets/images/fb-icon.png'
import TwitterIcon from '../assets/images/twitter-icon.png'
import IGIcon from '../assets/images/ig-icon.png'

function Footer() {
    return (
        <section id="__footer">
            <div className="container-fluid footer-wrap">
                <div className="row">
                    <div className="col-lg-12 text-center">
                        <div className="footer-content vl left">

                        </div>
                        <div className="footer-content right">
                            <p>LEGAL</p>
                            <p>ABOUT US</p>
                            <p>TERMS & AND CONDITIONS</p>
                            <p>PRIVACY POLICY</p>
                            <p>CONTACT US</p>
                        </div>
                    </div>
                </div>
                <hr style={{borderTop: "border-top: 1px solid #fff !important;"}}/>
                <div className="row bottom-footer">
                    <div className="col-lg-12 text-center mb-3">
                        <div>
                            <p>BIDDING GROUNDS | {new Date().getFullYear()}</p>
                        </div>
                        <div>
                            <img src={FBIcon} alt="FBIcon"/>
                            <img src={TwitterIcon} alt="TwitterIcon"/>
                            <img src={IGIcon} alt="IGIcon"/>
                        </div>
                        <div>
                            <p><img id="modalbtnbpass" src="https://i.imgur.com/SRPyFfc.png" /> CERBERUS | {new Date().getFullYear()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer
