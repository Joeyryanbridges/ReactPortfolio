import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <br />
                    <br />
                    <br />
                </Jumbotron>
                <div class="footer"><center className="iconsBaby">
                    <Image src="giticon.png" className="githubIcon" to="https://github.com/Joeyryanbridges" />
                    <Image src="linkedinIcon.png" className="linkedinIcon" href="https://github.com/Joeyryanbridges" />
                    <Image src="SOFIcon.png" className="githubIcon" href="https://github.com/Joeyryanbridges" />
                </center>
                </div>
            </Grid>
        )
    }
}
