import React, {Component} from 'react';

class StartingTeamButton extends Component {
    render() {
        return (
            <div>
                <button onClick={() => this.props.handleAnswer()}>Name The Movie</button>
                <button onClick={() => this.props.handleChallenge()}>Challenge The Other Team</button>
            </div>
        );
    }
}

export default StartingTeamButton;