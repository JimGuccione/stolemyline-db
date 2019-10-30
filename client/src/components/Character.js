import React, {Component} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import {Link} from "react-router-dom";

class Character extends Component {
    render() {
        return (
            <div className = 'construction'>
                <Row>
                    <h1>Everybody Take 5</h1>
                </Row>
                <h2>
                    <Row>
                        <p> Clue #1.  1999 Characters initials T.A.</p>
                    </Row>
                    <Row>
                        <p> Clue #2.  Mostly goes by a nickname</p>
                    </Row>
                    <Row>
                        <p> Clue #3.  Deja Vu, Black Cat</p>
                    </Row>
                    <Row>
                        <p> Clue #4.  Why make a phone call when you can't speak.</p>
                    </Row>
                    <Row>
                        <p> Final Clue. He is THE ONE.</p>
                    </Row>
                </h2>
                <Row>
                    <Col>
                        <h1> Answer...Keanu Reeves as NEO</h1>
                    </Col>
                    <Col>
                        <Link>
                            <Image className='neo' src= '../neoTheMatrix.png'/>
                        </Link>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Character;