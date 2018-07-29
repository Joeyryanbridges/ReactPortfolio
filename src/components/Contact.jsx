import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }

    render() {
        return (
            <div className="container">
                <Form horizontal>
                    <FormGroup controlId="formHorizontalEmail">

                    </FormGroup>
                </Form>
            </div>
        );
    }
}