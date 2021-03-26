import React from "react";
import {Form, Button} from 'react-bootstrap';
import "./ContactForm.css";

export function FinalForm() {
    return (
        <div className="finalContact">
            <h2> Do you want to know more? Contact Me.</h2>
            <div className='formDiv'>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email"/>
                    <Form.Text className="text-muted">
                    </Form.Text>
                </Form.Group>
                <Form.Group rows={3} controlId="formBasicMessage">
                    <Form.Control as="textarea" placeholder='Enter your message' rows={3}/>
                </Form.Group>
                <Button variant="outline-primary">
                    Submit
                </Button>
            </Form>
            </div>
        </div>
    );
}