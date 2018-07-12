import React, { Component } from 'react'
import { Grid, Row, Col, Panel, Image, } from 'react-bootstrap'
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
                                    <Panel.Title toggle><Image src="assets/goals.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>The best social app to keep your daily goals all in one place! Check off completed goals, see frinds goals, and take off your list when done!</center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Quick Bytes</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/cook.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Needing to make a quick breakfast, lunch, or dinner? Do you only have tomatoes and potatoes? Plug your ingredients here for a recipe!</center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Giphy API</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/giphy.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Gif search based on all of the "feels". Find some of the funniest gif's to express how you feel here!</center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={12} md={4}>
                            <h4><center>COLORS.</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/colors.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Welcome to COLORS. The object is you have to choose a color, but you can not click the same one twice. You think its easy, its actually not! Try for yourself! </center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Rx Tracker</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/rx.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>A full stack application that not only keeps track of your RX schedule, but appointments and personal heath information. Stay healthy! </center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Simpsons Zombie Game</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/simpsons.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Choose between Homer, Bart, Marge, and Lisa in a battle to the grave! </center></p>
                                    <center><button type="button" class="btn btn-outline-danger">View Here!</button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>


                </div>
            </Grid>
        )
    }
}
