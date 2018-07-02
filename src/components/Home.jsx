import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Button, Image } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <Grid>
                <Jumbotron>
                    <center>
                        <h2>Joey R. Bridges</h2>
                        <h4>Create Design Imagine</h4>
                        <Link to="/about">
                            <Button bsSytle="Success">About</Button>
                        </Link>
                        <Link to="/portfolio">
                            <Button bsSytle="Success">Portfolio</Button>
                        </Link>
                        <Link to="/contact">
                            <Button bsSytle="Success">Contact</Button>
                        </Link>
                    </center>
                    <br />
                    <Image src="assets/background.jpg" className="home-pic" />
                </Jumbotron>
            </Grid>
        )
    }
}
