import React, {Component} from 'react';

class JudgeAnswer extends Component {
    render() {
        return (
            <div align="center">
                <div className='judgeText'>
                <h2>AND THE ANSWER IS...</h2>
                </div>
                <button onClick={() => this.props.handleRight()}>Yes, Nailed it</button>
                <button onClick={() => this.props.handleWrong()}>Missed it by that much</button>
            </div>
        );
    }
}


export default JudgeAnswer;