import React, {useState} from 'react'
import { Modal, Button, Form } from 'react-bootstrap'
import SignUpImg from '../../assets/images/sign-up.png'
import GoogleSignInImg from '../../assets/images/google-sign-in.png'
import GBSignInImg from '../../assets/images/fb-sign-in.png'
import { useAlert } from "react-alert";
import { createUser, verifyCreds, dispatchUserData } from '../../redux/actions/user/login';
import { useSelector, useDispatch } from 'react-redux';

function SignUp(props) {
    const alert = useAlert();
    const dispatch = useDispatch();
    const [formFields, setFormFields] = useState({
        username: "",
        email: "",
        password: "",
        agree: false
    });
    const [isLoading, setLoading] = useState(false);
    const handleFormFieldChange = (e) => {
        setFormFields({
            ...formFields,
            [e.target.name]: e.target.name == "agree" ? e.target.checked : e.target.value
        });
    }
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        if(formFields.username != "" && formFields.email != "" && formFields.password != "" && formFields.agree == true){
            const createUserResponse = await Promise.resolve(createUser(formFields));
            const verifyCredsResponse = await Promise.resolve(verifyCreds(formFields));
            setLoading(false);
            if(createUserResponse.success){
                alert.show(createUserResponse.message);
                //hide sign up modal
                props.hide(false);
            }else{
                alert.show(createUserResponse.message);
            }
            if(verifyCredsResponse.success){
                dispatch(dispatchUserData(verifyCredsResponse.user));
            }else{
                alert.show(verifyCredsResponse.message);
            }
        }else{
            setLoading(false);
            if(formFields.username == "" && formFields.email == "" && formFields.password == ""){
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
                    <h1>SIGN UP</h1>
                    <p>START BUYING FOR LESS. JOIN US NOW.</p>
                    <hr />
                </div>
                <div className="body-content">
                    <Form onSubmit={handleFormSubmit.bind(this)}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>USERNAME</Form.Label>
                            <Form.Control type="text" name="username" placeholder="PREFFERED USERNAME" onChange={handleFormFieldChange.bind(this)} defaultValue={formFields.username}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>EMAIL ADDRESS</Form.Label>
                            <Form.Control type="email" name="email" placeholder="ENTER YOUR EMAIL ADDRESS" onChange={handleFormFieldChange.bind(this)} defaultValue={formFields.email}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>PASSWORD</Form.Label>
                            <Form.Control type="password" name="password" placeholder="AT LEAST 8 CHARACTERS" onChange={handleFormFieldChange.bind(this)} defaultValue={formFields.password}/>
                        </Form.Group>
                        <Form.Group controlId="formBasicCheckbox" >
                            <Form.Check type="checkbox" onChange={handleFormFieldChange.bind(this)} name="agree" label="I HAVE READ AND AGREE TO BIDDING GROUNDS’ TERMS OF USE AND PRIVACY POLICY. I ALSO AGREE THAT I AM AT LEAST 18 YEARS OF AGE AND TO ONLY OPEN ONE ACCOUNT PER PERSON." defaultChecked={formFields.agree}/>
                        </Form.Group>
                        <Button variant="primary" type="submit" disabled={isLoading}>
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
