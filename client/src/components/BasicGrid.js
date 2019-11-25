import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";

class BasicGrid extends Component {

    constructor(props) {
        super(props);
        this.state={
            quote:'',
            movie:'',
            level:''
        }
    }

    getQuote = async () => {
        const res = await fetch('http://localhost:5000/quotes');
        const json = await res.json();
        for (let i=0;i<json.length;i++){
            this.setState({movie: json[i].movie_title});
            this.setState({quote: json[i].body_text});
            this.setState({level: json[i].level_id});

            console.log(json[i]);
        }
    };


    componentDidMount() {
        (async () => {
            try {
                await this.getQuote();
            } catch (err) {
                console.error(err)
            }
        })();
    }


        render() {
            const quote=this.state.quote;
            const movie=this.state.movie;
            const level=this.state.level;
            return (
                <div className='movieArray'>
                    <div className = 'question'>
                        What movie contains this quote?
                    </div>
                    <div className='movieLine'>
                        {quote}
                    </div>
                    <div className='level_id'>
                       <Row>
                           <Col>
                           </Col>
                           <Col>
                           </Col>
                           <Col>
                                <h2>Point Value</h2>
                           </Col>
                           <Col>
                                 <h1> {level}</h1>
                           </Col>
                        </Row>
                    </div>
                    <div className='movieTitle'>
                        {movie}
                    </div>

                    <div className='tryAgain'>
                        <Button href="./Quotes">Try Again</Button>
                    </div>

                </div>
        );
    }
}

export default BasicGrid;

// const= arr = ['foo', 'bar', 'baz'];
// const= i = 0;
//
// function nextItem() {
//     i = i + 1; // increase i by one
//     i = i % arr.length; // if we've gone too high, start from `0` again
//     return arr[i]; // give us back the item of where we are now
// }
//
// function prevItem() {
//     if (i === 0) { // i would become 0
//         i = arr.length; // so put it at the other end of the array
//     }
//     i = i - 1; // decrease by one
//     return arr[i]; // give us back the item of where we are now
// }
//
// window.addEventListener('load', function () {
//     document.getElementById('output').textContent = arr[0]; // initial value
//     document.getElementById('prev_button').addEventListener(
//         'click', // we want to listen for a click
//         function (e) { // the e here is the event itself
//             document.getElementById('output').textContent = prevItem();
//         }
//     );
//
//     document.getElementById('next_button').addEventListener(
//         'click', // we want to listen for a click
//         function (e) { // the e here is the event itself
//             document.getElementById('output').textContent = nextItem();
//         }
//     );
// });
//
//
// render() {
//
//     return (
//         <div className='movieArray'>
//             <div id="output"></div>
//
//             <div>
//                 <span id="prev_button">Previous</span>
//                 <span id="next_button">Next!</span>
//             </div>
//         </div>