import React from 'react';
import { Button, ButtonToolbar, Image, Row, Col, PanelGroup, Panel } from 'react-bootstrap';
import './Contact.css';

export default class Contact extends React.Component {

    render() {
        return (
            <div className="container">
                <Row className="show-grid text-center">
                    <Col xs={6} sm={8} className="contact-wrapper">
                        <Image src="joeyface.jpg" className="joeyface" />
                    </Col>

                    <Col xs={6} sm={4} className="person-wrapper">
                        <PanelGroup accordion id="accordion-example">
                            <Panel className="style-cards" eventKey="1">
                                <Panel.Heading>
                                    <Panel.Title toggle className="text">Lets work together!</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <ButtonToolbar>
                                        <Button href="mailto:joeyryanbridges@gmail.com"><center>Shoot me an email!</center></Button>
                                    </ButtonToolbar>
                                </Panel.Body>
                            </Panel>
                            <Panel className="style-cards" eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle className="text"> Give me a ring!</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <h5>520.262.7363</h5>
                                </Panel.Body>
                            </Panel>
                            <Panel className="style-cards" eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle className="text">Follow me!</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <a href="https://www.instagram.com/joeyyryanbridges/?hl=en">IG: @joeyryanbridges</a>
                                    <br />
                                    <a href="https://www.facebook.com/joey.bridges.37">FaceBook: Joey Ryan Bridges</a>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                        <br />
                        <br />
                        <br />
                        <p className="lowText">*Click text in panel of your choice to view additional content!*</p>
                    </Col>
                </Row>
                <div className="footer"><center className="iconsBaby">
                    <a href="https://github.com/Joeyryanbridges">
                        <Image src="giticon.png" className="githubIcon" />
                    </a>
                    <a href="https://www.linkedin.com/in/joeyrbridges/">
                        <Image src="linkedinIcon.png" className="linkedinIcon" />
                    </a>
                    <a href="https://stackoverflow.com/users/9178799/joeyryanbridges">
                        <Image src="SOFIcon.png" className="githubIcon" />
                    </a>
                </center>
                </div >
            </div>
        )
    }
}
