import React, { Component } from 'react'
import { Grid, Row, Col, Panel, Image, } from 'react-bootstrap'
import { Link } from 'react-router';
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <Grid>
                <div className="container-fluid">
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <h4><center>Goal Post</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="goals.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>The best social app to keep your daily goals all in one place! Check off completed goals, see frinds goals, and take off your list when done!</center></p>
                                    <center><button type="button" className="btn btn-outline-danger" >View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Quick Bytes</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="cook.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Needing to make a quick breakfast, lunch, or dinner? Do you only have tomatoes and potatoes? Plug your ingredients here for a recipe!</center></p>
                                    <center><button type="button" className="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Giphy API</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="giphy.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Gif search based on all of the "feels". Find some of the funniest gif's to express how you feel here!</center></p>
                                    <center><button type="button" className="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <h4><center>COLORS.</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="colors.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Welcome to COLORS. The object is you have to choose a color, but you can not click the same one twice. You think its easy, its actually not! Try for yourself! </center></p>
                                    <center><button type="button" className="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Rx Tracker</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="rx.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>A full stack application that not only keeps track of your RX schedule, but appointments and personal heath information. Stay healthy! </center></p>
                                    <center><button type="button" className="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Simpsons Zombie Game</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="simpsons.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Choose between Homer, Bart, Marge, and Lisa in a battle to the grave! </center></p>
                                    <center><button type="button" className="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
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
            </Grid>
        )
    }
}
