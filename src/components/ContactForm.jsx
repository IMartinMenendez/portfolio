import React from "react";
import {Form, Button} from 'react-bootstrap';
import "./ContactForm.css";

export function FinalForm() {
    return (
        <div id='contact' className="finalContact">
            <h2> Do you want to know more? Contact Me.</h2>
            <div className='formDiv'>
                <Form enctype="text/plain" action="mailto:irene1martin2menendez@gmail.com" method="post">
                    <Form.Group controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Enter email"/>
                        <Form.Text className="text-muted">
                        </Form.Text>
                    </Form.Group>
                    <Form.Group rows={3} controlId="formBasicMessage">
                        <Form.Control name="message" as="textarea" placeholder='Enter your message' rows={3}/>
                    </Form.Group>
                    <Button type="submit" variant="outline-primary">
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
}