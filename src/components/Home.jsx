import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image, Button } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <Image src="assets/Stars.jpg" className="jumbotron-pic" />
                    <h2>Welcome to JoeyRyanBridges.io</h2>
                    <h4>Create Design Imagine</h4>
                    <Link to="/about">
                        <Button bsSytle="Primary">About</Button>
                    </Link>
                </Jumbotron>
            </Grid>
        )
    }
}
