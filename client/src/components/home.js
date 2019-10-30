import React, {Component} from 'react';
import {Row, Col, Image, Button} from 'react-bootstrap';

class Home extends Component {
    render() {
        return (
            <div className="allOfIt">

                <div className = 'smlLogo'>
                    <Image src= './logo512.png'/>
                </div>
                <div className='welcome'>
                    <Row>
                        <Col>
                            StoleMyLine Games
                        </Col>
                        <Col>
                            <Button href="./components/LandingPage">SML Games</Button>
                        </Col>
                        <Col>

                        </Col>
                    </Row>
                </div>
             </div>
        );
    }
}

export default Home;