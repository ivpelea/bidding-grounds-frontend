import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SignInImg from '../../assets/images/sign-in.png'
import GoogleSignInImg from '../../assets/images/google-sign-in.png'
import GBSignInImg from '../../assets/images/fb-sign-in.png'
import OrImg from '../../assets/images/or-sign-in.png'
import { useAlert } from "react-alert";
import { verifyCreds, dispatchUserData, getUserData,authUser } from '../../redux/actions/user/login';
import { useSelector, useDispatch } from 'react-redux';

function SignIn(props) {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState({
        email: "",
        password: "",
    });
    const [isLoading, setLoading] = useState(false);
    const handleFormFieldChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.value
        });
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(formFields.email != "" && formFields.password != ""){
            const verifyCredsResponse = await Promise.resolve(verifyCreds(formFields));
            const authUserResponse = await Promise.resolve(authUser());
            console.log(authUserResponse);
            setLoading(false);
            if(verifyCredsResponse.success){
                dispatch(dispatchUserData(verifyCredsResponse.user));
                alert.show(verifyCredsResponse.message);
                //hide sign up modal
                props.hide(false);
            }else{
                alert.show(verifyCredsResponse.message);
            }
        }else{
            setLoading(false);
            if(formFields.email == "" && formFields.password == ""){
                alert.show("Please fill out all of the fields!");
            }else if(formFields.agree == false){
                alert.show("Please agree to our terms of use and privacy policy.");
            }else {
                alert.show("Please fill out all of the fields!");
            }
        }
    }
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
                    <Form onSubmit={handleFormSubmit.bind(this)}>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>EMAIL ADDRESS</Form.Label>
                            <Form.Control type="email" name="email" placeholder="ENTER YOUR EMAIL ADDRESS" onChange={handleFormFieldChange.bind(this)} defaultValue={formFields.email}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" name="password" placeholder="AT LEAST 8 CHARACTERS" onChange={handleFormFieldChange.bind(this)} defaultValue={formFields.password}/>
                        </Form.Group>
                        <br/>
                        
                        <Button variant="primary" type="submit" disabled={isLoading}>
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
