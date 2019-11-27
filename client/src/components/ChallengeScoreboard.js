import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";

class ChallengeScoreboard extends Component {
    constructor (props) {
        super(props);
        this.state = {
            homeCount: 0,
            visitorCount:0
        };
    }

    handleHomeIncrement(amount){
        this.setState({
            homeCount: this.state.homeCount +amount
        });
    }

    handleHomeDecrement(amount){
        this.setState({
            homeCount: this.state.homeCount -amount
        });
    }
    handleVisitorIncrement(amount){
        this.setState({
            visitorCount: this.state.visitorCount +amount
        });
    }

    handleVisitorDecrement(amount){
        this.setState({
            visitorCount: this.state.visitorCount -amount
        });
    }

    isVisitorTurn(){
        return !(this.props.quoteIndex % 2)
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
                                    <button disabled={!this.isVisitorTurn()} onClick={() => this.handleVisitorIncrement(this.props.points)}>Correct</button>
                                    <button disabled={this.isVisitorTurn()} onClick={() => this.handleHomeIncrement((this.props.points)/2)}>Wrong</button>
                                    <button disabled={this.isVisitorTurn()} onClick={() => this.handleVisitorIncrement((this.props.points))}>Challenge</button>
                                </div>
                            </Col>
                            <Col xs={5}>
                                <div>
                                    <button disabled={this.isVisitorTurn()} onClick={() => this.handleHomeIncrement((this.props.points))}>Correct</button>
                                    <button disabled={!this.isVisitorTurn()} onClick={() => this.handleVisitorIncrement((this.props.points)/2)}>Wrong</button>
                                    <button disabled={!this.isVisitorTurn()} onClick={() => this.handleHomeIncrement((this.props.points))}>Challenge</button>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        );
    }
}

export default ChallengeScoreboard;