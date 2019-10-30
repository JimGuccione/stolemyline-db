import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Answer extends Component {

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
                <div>{this.state.homeCount}</div>
                <div>
                    <button onClick={() => this.handleHomeIncrement()}>+</button>
                    <button onClick={() => this.handleHomeDecrement()}>-</button>
                </div>
                <div>{this.state.visitorCount}</div>
                <div>
                    <button onClick={() => this.handleVisitorIncrement()}>+</button>
                    <button onClick={() => this.handleVisitorDecrement()}>-</button>
                </div>
            </div>
        );
    }
}

export default Answer;