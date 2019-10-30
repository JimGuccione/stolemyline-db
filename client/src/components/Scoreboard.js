import React, {Component} from 'react';
import {Container, Col, Row} from "react-bootstrap";

class Scoreboard extends Component {

constructor (props) {
    super(props);
    this.state = {
        homeCount: 0,
        visitorCount:0
    };
}

handleHomeIncrement(){
    this.setState({
        homeCount: this.state.homeCount +1
    });
}

handleHomeDecrement(){
    this.setState({
        homeCount: this.state.homeCount -1
    });
}
handleVisitorIncrement(){
    this.setState({
        visitorCount: this.state.visitorCount +1
    });
}

handleVisitorDecrement(){
    this.setState({
        visitorCount: this.state.visitorCount -1
    });
}



    render() {
        return (
            <div>
                <div className ='score'>
                       <Container>
                            <Row>
                                <Col xs={5}>
                                    <h2>VISITOR Score</h2>
                                </Col>
                                <Col xs={5}>
                                    <h2>HOME Score</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={5}>
                                    <h2><div>{this.state.visitorCount}</div></h2>
                                </Col>
                                <Col xs={5}>
                                    <h2><div>{this.state.homeCount}</div></h2>
                                </Col>
                            </Row>
                           <Row>
                               <Col xs={5}>
                                       <div>
                                           <button onClick={() => this.handleVisitorIncrement()}>+</button>
                                           <button onClick={() => this.handleVisitorDecrement()}>-</button>
                                       </div>
                               </Col>
                               <Col xs={5}>
                                       <div>
                                           <button onClick={() => this.handleHomeIncrement()}>+</button>
                                           <button onClick={() => this.handleHomeDecrement()}>-</button>
                                       </div>
                               </Col>
                           </Row>
                        </Container>
                </div>
            </div>
        );
    }
}

export default Scoreboard;