import React, {Component} from 'react';
import {Button, Col, Row} from 'react-bootstrap';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './LandingPage.css'
import {Image} from "react-bootstrap";


class LandingPage extends Component {
    render() {
        return (
            <div className='gridContainer'>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Paper className='paper'>
                            <Row>
                            <Col>
                            <p>Select one of the SML Games Below...</p>
                            </Col>
                            <Col>
                            <Image src= '../logo512.png' height={200}/>
                            </Col>
                            </Row>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className= 'paper'>
                            <Row>
                                <h1>MOVIE QUOTES...</h1>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                <Button href="../Quotes">PLAY</Button>
                                </Col>
                            </Row>
                            <Row>
                                We supply the quote, you name the movie.
                            </Row>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className= 'paper'>
                            <Row>
                                <h1>Name the Actor</h1>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                    <Button href="../components/Actor">PLAY</Button>
                                </Col>
                            </Row>
                            <Row>
                                Character and Movie => Name the Actor
                            </Row>
                        </Paper>
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className= 'paper'>
                            <Row>
                                <h1>Everybody Take 5</h1>
                            </Row>
                            <Row>
                                <Col>
                                </Col>
                                <Col>
                                    <Button href="../components/Character">PLAY</Button>
                                </Col>
                            </Row>
                            <Row>
                                5 Clues to Name the Movie Character
                            </Row>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default LandingPage;