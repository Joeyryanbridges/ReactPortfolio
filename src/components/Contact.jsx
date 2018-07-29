import React from 'react';
import { FormControl, FormGroup, ControlLabel, Col, Form, Button } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            value: ''
        };
    }

    getValidationState() {
        const length = this.state.value.length;
        if (length > 10) return 'success';
        else if (length > 5) return 'warning';
        else if (length > 0) return 'error';
        return null;
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