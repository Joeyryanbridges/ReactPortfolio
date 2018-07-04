import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <center>
                        <h2>Developing &#9686; Creating &#9687; Designing</h2>
                    </center>
                    <br />
                    <Image src="assets/background.jpg" className="home-pic" responsive />
                    <br />
                    <br />
                    <center className="iconsBaby">
                        <Image src="assets/giticon.png" className="githubIcon" to="https://github.com/Joeyryanbridges" />
                        <Image src="assets/linkedinIcon.png" className="linkedinIcon" href="https://github.com/Joeyryanbridges" />
                        <Image src="assets/SOFIcon.png" className="githubIcon" href="https://github.com/Joeyryanbridges" />
                    </center>
                </Jumbotron>
            </Grid>
        )
    }
}
