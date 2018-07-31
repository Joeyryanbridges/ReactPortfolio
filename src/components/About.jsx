import React, { Component } from 'react'
import { Row, Image, Col, PanelGroup, Panel } from 'react-bootstrap';
import './About.css';

export default class About extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            activeKey: '2'
        };
    }

    handleSelect(activeKey) {
        this.setState({ activeKey });
    }
    render() {
        return (
            <div>
                <div className="container">
                    <Row className="show-grid text-center">
                        <Col xs={6} sm={8} className="person-wrapper">
                            <Image src="family.jpg" className="profile-pic" />
                        </Col>
                        <Col xs={6} sm={4} className="person-wrapper">
                            <PanelGroup accordion id="accordion-example">
                                <Panel className="style-cards" eventKey="1">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="text">About</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <p>
                                            My name is Joey Bridges, and I am 30 years young. I currently reside in the city of Tucson
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
                                <Panel className="style-cards" eventKey="2">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="text"> Toolbelt</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>JavaScript</li>
                                        <li>Express</li>
                                        <li>Handlebars</li>
                                        <li>jQuery</li>
                                        <li>JSON</li>
                                        <li>Node.js</li>
                                        <li>Sequelize</li>
                                        <li>Nightmare.js</li>
                                        <li>Sequelize</li>
                                        <li>mySQL</li>
                                        <li>MongoDB</li>
                                        <li>Mongoose</li>
                                        <li>React.js</li>
                                        <li>Node Package Manager (NPM)</li>
                                    </Panel.Body>
                                </Panel>
                                <Panel className="style-cards" eventKey="3">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="text">Future</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>

                                        <h4>To be learned..</h4>

                                        <li>Python</li>
                                        <li>React Native</li>
                                        <li>C++</li>
                                        <li>Java</li>
                                        <li>PHP</li>


                                    </Panel.Body>
                                </Panel>
                                <Panel className="style-cards" eventKey="4">
                                    <Panel.Heading>
                                        <Panel.Title toggle className="text">Hobbies</Panel.Title>
                                    </Panel.Heading>
                                    <Panel.Body collapsible>


                                    </Panel.Body>
                                </Panel>
                            </PanelGroup>
                            <br />
                            <br />
                            <br />
                            <p className="lowText">*Click text in panel of your choice to view additional content!*</p>


                        </Col>
                    </Row>
                </div >
            </div >
        )
    }
}
