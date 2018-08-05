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
                                    <a href="mailto:joeyryanbridges@gmail.com">
                                        <Image src="gmail.png" className="email" />
                                    </a>
                                </Panel.Body>
                            </Panel>


                            <Panel className="style-cards" eventKey="2">
                                <Panel.Heading>
                                    <Panel.Title toggle className="text"> Give me a ring!</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>
                                    <Image src="call.png" className="call" />
                                    <Panel.Title>
                                        <a href="tel:1-520-262-7363">1-520-262-7363</a></Panel.Title>
                                </Panel.Body>
                            </Panel>


                            <Panel className="style-cards" eventKey="3">
                                <Panel.Heading>
                                    <Panel.Title toggle className="text">Follow me!</Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><center>
                                    <a href="https://www.instagram.com/joeyyryanbridges/?hl=en">
                                        <Image src="insta.png" className="instaIcon" />
                                    </a>
                                    <br />
                                    <a href="https://www.facebook.com/joey.bridges.37">
                                        <Image src="facebook.png" className="facebookIcon" />
                                    </a>
                                    <br />
                                    <a href="https://github.com/Joeyryanbridges">
                                        <Image src="giticon.png" className="github" />
                                    </a>
                                    <br />
                                    <br />
                                    <a href="https://www.linkedin.com/in/joeyrbridges/">
                                        <Image src="linkedinIcon.png" className="linked" />
                                    </a>
                                    <br />
                                    <br />
                                    <a href="https://stackoverflow.com/users/9178799/joeyryanbridges">
                                        <Image src="SOFIcon.png" className="SOFI" />
                                    </a>
                                </center>
                                </Panel.Body>

                            </Panel>
                        </PanelGroup>
                        <br />
                        {/* <br />
                        <br /> */}
                        <blockquote>
                            <p>If at first you don't succeed, pay someone else to do it for you.</p>
                            <footer><cite className="MH" a>Mark Hoppus</cite></footer>
                        </blockquote>
                    </Col>
                </Row>
            </div >
        )
    }
}
