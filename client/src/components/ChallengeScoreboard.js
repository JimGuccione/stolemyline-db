import React, {Component} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import StartingTeamButton from "./StartingTeamButton";
import SecondTeamInput from "./SecondTeamInput";
import JudgeAnswer from "./JudgeAnswer";


class ChallengeScoreboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            homeCount: 0,
            visitorCount: 0,
            opposingTeamMessage: "",
            isJudgeVisible: false,
            isChallenged: false
        };
        this.handleHomeIncrement = this.handleHomeIncrement.bind(this);
        this.handleVisitorIncrement = this.handleVisitorIncrement.bind(this);
        this.handleAnswer = this.handleAnswer.bind(this);
        this.handleChallenge = this.handleChallenge.bind(this);
        this.handleRight = this.handleRight.bind(this);
        this.handleWrong = this.handleWrong.bind(this);
    }

    handleHomeIncrement(amount) {
        this.setState({
            homeCount: this.state.homeCount + amount
        });
    }

    handleHomeDecrement(amount) {
        this.setState({
            homeCount: this.state.homeCount - amount
        });
    }

    handleVisitorIncrement(amount) {
        this.setState({
            visitorCount: this.state.visitorCount + amount
        });
    }

    handleVisitorDecrement(amount) {
        this.setState({
            visitorCount: this.state.visitorCount - amount
        });
    }

    isVisitorTurn() {
        return !(this.props.quoteIndex % 2)
    }

    handleAnswer() {
        this.setState({
            opposingTeamMessage: "",
            isJudgeVisible: true
        });
    }

    handleChallenge() {
        this.setState({
            opposingTeamMessage: <h3>"YOU HAVE BEEN CHALLENGED"</h3>,
            isJudgeVisible: true,
            isChallenged: true
        });
    }

    completeQuestion() {
        this.setState({
            opposingTeamMessage: "",
            isJudgeVisible: false,
            isChallenged: false
        });
        this.props.handleNextQuote();
    }

    handleRight() {
        if (this.isVisitorTurn()) {
            if (!this.state.isChallenged) {
                this.handleVisitorIncrement(this.props.points)

            } else {
                this.handleHomeIncrement(this.props.points)
            }

        } else {
            if (!this.state.isChallenged) {
                this.handleHomeIncrement(this.props.points)

            } else {
                this.handleVisitorIncrement(this.props.points)
            }

        }
        this.completeQuestion();

    }

    handleWrong() {
        if (this.isVisitorTurn()) {
            if (this.state.isChallenged) {
                this.handleVisitorIncrement(this.props.points / 2)
            }

        } else {
            if (this.state.isChallenged) {
                this.handleHomeIncrement(this.props.points / 2)
            }


        }

        this.completeQuestion();

    }




    render() {
        return (
            <div>
                <div className='score'>
                    <Container>
                        <Row>
                            <Col xs={5}>
                                <h2>VISITOR Score</h2>

                            </Col>
                            <Col xs={5}>
                                <h2>HOME Score</h2>
                            </Col>
                        </Row>
                        {/*<Row>*/}
                            {/*<select value = "dropdown">*/}
                                {/*<option value="0">MONKEY BUTTS</option>*/}
                                {/*<option value="1">ATTACK OF THE RETREATING COWS</option>*/}
                                {/*<option value="2">2</option>*/}
                                {/*<option value="3">3</option>*/}
                                {/*<option value="4">4</option>*/}
                            {/*</select>*/}
                        {/*</Row>*/}
                        <Row>
                            <Col xs={5}>
                                <h2>
                                    <div>{this.state.visitorCount}</div>
                                </h2>
                            </Col>
                            <Col xs={5}>
                                <h2>
                                    <div>{this.state.homeCount}</div>
                                </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={5}>
                                {this.isVisitorTurn() && <StartingTeamButton handleAnswer={this.handleAnswer}
                                                                             handleChallenge={this.handleChallenge}/>}
                                {!this.isVisitorTurn() && <SecondTeamInput message={this.state.opposingTeamMessage}/>}

                            </Col>
                            <Col xs={5}>
                                {!this.isVisitorTurn() && <StartingTeamButton handleAnswer={this.handleAnswer}
                                                                              handleChallenge={this.handleChallenge}/>}
                                {this.isVisitorTurn() && <SecondTeamInput message={this.state.opposingTeamMessage}/>}
                            </Col>
                        </Row>

                    </Container>

                </div>
                {this.state.isJudgeVisible &&
                <JudgeAnswer handleRight={this.handleRight} handleWrong={this.handleWrong}/>}
            </div>
        );
    }
}

export default ChallengeScoreboard;