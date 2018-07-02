import React, { Component } from 'react'
import { Row, Image, Col, PanelGroup, Panel } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <Row className="show-grid text-center">
                        <Col xs={6} sm={6} className="person-wrapper">
                            <Image src="assets/family.jpg" className="profile-pic" />
                        </Col>
                        <Col xs={6} sm={6} className="person-wrapper">
                            <PanelGroup accordion id="accordion-example">
                                <Panel eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #1</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <p> My name is Joey Bridges, and I am 30 years young. I currently reside in the city of Tucson
                                            Arizona with my beautiful wife, two handsome boys, and my sweet daughter (which whom
                                            will never date).
                                    </p>
                                        <p> From the start of my journey at the University of Arizona's coding and Web Development
                                            program, I've gained a good deal of experience in programming in general, and in
                                        working with JavaScript as a front and back end language in particular.</p>
                                        <p> I think that the ability to code gives you the tools and skills to have an impact, since
                                            technology and start-ups are changing the world at an incredible speed. For now,
                                            my aim is to become an awesome programmer. In the future, I will always have interest
                                        in being involved in highly innovative projects. </p>
                                        <p> In this new world of programming, Ill be keeping my mind set to exceed far beyond what
                                            I even knew I was capable of. Godspeed!
                                    </p>
                                    </Panel.Body>
                                </Panel>
                                <Panel eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #2</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable VHS.
    </Panel.Body>
                                </Panel>
                                <Panel eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle>Collapsible Group Item #3</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                        richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard
                                        dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf
                                        moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla
                                        assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore
                                        wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur
                                        butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim
                                        aesthetic synth nesciunt you probably haven't heard of them accusamus
                                        labore sustainable VHS.
    </Panel.Body>
                                </Panel>
                            </PanelGroup>;


                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}
