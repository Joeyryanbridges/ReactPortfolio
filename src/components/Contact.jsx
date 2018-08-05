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
                                    <Image src="gmail.png" className="email" />
                                    <a href="mailto:joeyryanbridges@gmail.com"> Shoot me an email!</a>
                                    <br />
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
                                <Panel.Body collapsible>
                                    <Image src="insta.png" className="instaIcon" />
                                    <a href="https://www.instagram.com/joeyyryanbridges/?hl=en"> IG: @joeyryanbridges</a>
                                    <br />
                                    <Image src="facebook.png" className="facebookIcon" />
                                    <a href="https://www.facebook.com/joey.bridges.37"> FB: Joey Ryan Bridges</a>
                                    <br />
                                    <Image src="giticon.png" className="github" />
                                    <a href="https://github.com/Joeyryanbridges"> GitHub: joeyryanbridges</a>
                                    <br />
                                    <br />
                                    <Image src="linkedinIcon.png" className="linked" />
                                    <a href="https://www.linkedin.com/in/joeyrbridges/"> LinkedIn: Joey Ryan Bridges</a>
                                    <br />
                                    <br />
                                    <Image src="SOFIcon.png" className="SOFI" />
                                    <a href="https://stackoverflow.com/users/9178799/joeyryanbridges"> Stackoverflow: Joey Ryan Bridges</a>
                                </Panel.Body>
                            </Panel>
                        </PanelGroup>
                        <br />
                        {/* <br />
                        <br /> */}
                        {/* <p className="lowText">*Click text in panel of your choice to view additional content!*</p> */}
                    </Col>
                </Row>
            </div >
        )
    }
}
