import React from 'react';
import { Button, ButtonToolbar, Image, Row, Col } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends React.Component {

    render() {
        return (
            <div>
                <div className="container">
                    <Row className="show-grid text-center">
                        <Col xs={6} sm={8} className="contact-wrapper">
                            <Image src="joeyface.jpg" className="joeyface" />
                        </Col>

                        <ButtonToolbar>
                            <Button href="mailto:joeyryanbridges@gmail.com"><center>Email Joey</center></Button>
                        </ButtonToolbar>
                    </Row>
                </div>
            </div>
        );
    }
}