import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Row, Col, Image} from 'react-bootstrap';


class Actor extends Component {
    render() {
        return (
            <div className = 'construction'>
                <Row>
                    <h1>Who am I???????</h1>
                </Row>
                <br />
                <Row>
                    <h2> I played Richard Blaine in the movie Casablanca.</h2>
                </Row>
                <br />
                <Row>
                <Col>
                    <h1> Answer...Humphrey Bogart</h1>
                </Col>
                <Col>
                    <Link>
                        <Image className='bogie' src= '../bogartCasablanca.jpg'/>
                    </Link>
                </Col>
                </Row>
            </div>
        );
    };
}

export default Actor;