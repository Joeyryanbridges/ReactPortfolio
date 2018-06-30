import React, { Component } from 'react'
import { Row, Image, Col } from 'react-bootstrap';

export default class About extends Component {
    render() {
        return (
            <div>
                <Row className="show-grid text-center">
                    <Col xs={12} sm={4} className="person-wrapper">
                        <Image src="assets/family.jpg" circle className="profile-pic" />
                        <h3></h3>
                        <p></p>
                    </Col>
                </Row>
            </div>
        )
    }
}
