import React from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SignUpImg from '../../assets/images/sign-up.png'
import GoogleSignInImg from '../../assets/images/google-sign-in.png'
import GBSignInImg from '../../assets/images/fb-sign-in.png'

function SignUp(props) {
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
                    <h1>SIGN UP</h1>
                    <p>START BUYING FOR LESS. JOIN US NOW.</p>
                    <hr />
                </div>
                <div className="body-content">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>USERNAME</Form.Label>
                            <Form.Control type="email" placeholder="PREFFERED USERNAME" />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>EMAIL ADDRESS</Form.Label>
                            <Form.Control type="password" placeholder="ENTER YOUR EMAIL ADDRESS" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" placeholder="AT LEAST 8 CHARACTERS" />
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="I HAVE READ AND AGREE TO BIDDING GROUNDS’ TERMS OF USE AND PRIVACY POLICY. I ALSO AGREE THAT I AM AT LEAST 18 YEARS OF AGE AND TO ONLY OPEN ONE ACCOUNT PER PERSON." />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            <img src={SignUpImg} alt="SignUpImg"/>
                        </Button>
                    </Form>
                    <div className="social-sign-in">
                        <div>
                            <img src={GBSignInImg} alt="GBSignInImg"/>
                        </div>
                        <div>
                            <img src={GoogleSignInImg} alt="GoogleSignInImg"/>
                        </div>
                    </div>
                    <div className="options">
                        <p>ALREADY HAVE A BIDDING GROUNDS ACCOUNT?</p>
                        <a href="test">SIGN IN AND START BIDDING.</a>
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

export default SignUp
