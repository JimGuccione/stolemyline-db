import React, {Component} from 'react';
import ChallengeScoreboard from './ChallengeScoreboard';

class Footer extends Component {
    render() {
        return (
            <div className='footerContainer'>

                    <ChallengeScoreboard quoteIndex={this.props.quoteIndex} points={this.props.points} handleNextQuote={this.props.handleNextQuote}/>


                </div>

        );
    }
}

export default Footer;