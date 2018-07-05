import React, { Component } from 'react'
import { Grid, Row, Col, Panel, Image, } from 'react-bootstrap'
import './Portfolio.css';

export default class Portfolio extends Component {
    render() {
        return (
            <Grid>
                <div className="container-fluid">
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <h4><center>Goal Post</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/goals.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>


                        </Col>
                        <Col xs={6} md={4}>
                            <h4><center>Quick Bytes</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/cook.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <h4><center>Giphy API</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/giphy.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                        </Col>
                    </Row>
                    <Row className="show-grid">
                        <Col xs={6} md={4}>
                            <h4><center>Colors</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/colors.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <h4><center>Goal Post</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/goals.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                        </Col>
                        <Col xs={6} md={4}>
                            <h4><center>Goal Post</center></h4>
                            <Panel>
                                <Panel.Heading>
                                    <Panel.Title toggle><Image src="assets/goals.gif" className="gif" responsive /></Panel.Title>
                                </Panel.Heading>
                                <Panel.Body collapsible>Panel content 1</Panel.Body>
                            </Panel>
                        </Col>
                    </Row>


                </div>
            </Grid>
        )
    }
}
