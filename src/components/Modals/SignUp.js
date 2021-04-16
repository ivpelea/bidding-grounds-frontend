import React from 'react'
import { Modal, Button } from 'react-bootstrap'

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
                    
                </div>
                <div className="body-action mt-4 mb-3">
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
