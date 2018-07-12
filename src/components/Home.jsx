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
                        <h2 >&#9686; D&#926;v&#926;loping &#8756; Cr&#926;ating &#9687; &#9686; D&#926;signing &#9687;</h2>
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
