import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <h2>Welcome to JoeyRyanBridges.io</h2>
                    <h4>Create Design Imagine</h4>
                    <Link to="/about">
                        <Button bsSytle="Primary">About</Button>
                    </Link>
                    <Link to="/portfolio">
                        <Button bsSytle="Primary">Portfolio</Button>
                    </Link>
                    <br />
                    <Image src="assets/background.jpg" className="home-pic" />
                </Jumbotron>
            </Grid>
        )
    }
}
