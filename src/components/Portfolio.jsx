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
                            <h4><center>COLORS.</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="colors.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>Welcome to COLORS. The object is to choose a color, but you can not click the same one twice. You think its easy, its actually not! Try for yourself! </center></p>
                                    <center><button type="button" className="btn btn-outline-danger" ><a target="_blank" href="https://joeyryanbridges.github.io/reactmemorygame/">View Here</a></button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={12} md={4}>
                            <h4><center>Rx Tracker</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="rx.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible><p><center>A full stack application that not only keeps track of your RX schedule, but appointments and personal heath information. Stay healthy! (Mobile Only!)</center></p>
                                    <center><button type="button" className="btn btn-outline-danger" ><a target="_blank" href="https://rxtracker.herokuapp.com/">View Here</a></button></center>
                                </Panel.Body>
                            </Panel>
                        </Col>
                    </Row>

                </div>
            </Grid>
        )
    }
}
