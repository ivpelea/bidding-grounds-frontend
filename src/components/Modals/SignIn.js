import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SignInImg from '../../assets/images/sign-in.png'
import GoogleSignInImg from '../../assets/images/google-sign-in.png'
import GBSignInImg from '../../assets/images/fb-sign-in.png'
import OrImg from '../../assets/images/or-sign-in.png'

function SignIn(props) {
    return (
        <Modal
            id="__user-control-modal"
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body className="text-center">
                <div className="body-header">
                    <h1>SIGN IN</h1>
                    <p>START BUYING FOR LESS. JOIN US NOW.</p>
                    <hr />
                </div>
                <div className="body-content">
                    <Form>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>EMAIL ADDRESS</Form.Label>
                            <Form.Control type="password" placeholder="ENTER YOUR EMAIL ADDRESS" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="AT LEAST 8 CHARACTERS" />
                        </Form.Group>
                        <br/>
                        
                        <Button variant="primary" type="submit">
                            <img src={SignInImg} alt="SignInImg"/>
                        </Button>
                        <div className="options">
                            <p>FORGOT YOUR PASSWORD? <a href="test"> PLEASE CONTACT SUPPORT</a></p>
                        </div>
                    </Form>
                    <div className="social-sign-in">
                        <div>
                            <img src={GBSignInImg} alt="GBSignInImg"/>
                        </div>
                        <div>
                            <img src={GoogleSignInImg} alt="GoogleSignInImg"/>
                        </div>
                    </div>
                    <div className="mt-3">
                        <img src={OrImg} alt="OrImg" style={{width: '100%'}}/>
                    </div>
                    <div className="options">
                        <p>DON'T HAVE A BIDDING GROUNDS ACCOUNT?</p>
                        <a href="test">SIGN UP AND START BIDDING.</a>
                    </div>
                </div>
                <div>
                    <p>© BIDDING GROUNDS | {new Date().getFullYear()}</p>
                </div>
            </Modal.Body>
            <Modal.Footer>
            </Modal.Footer>
        </Modal>
    )
}

export default SignIn
