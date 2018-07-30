import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron className="brainImg">
                </Jumbotron>
                <br />
                <center><h2>Welcome to Joey R. Bridges Portfolio</h2></center>
                <div class="footer"><center className="iconsBaby">
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
                </div>
            </Grid>
        )
    }
}
