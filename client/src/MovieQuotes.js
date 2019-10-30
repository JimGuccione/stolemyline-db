import React, {Component} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Footer from './components/Footer';


class MovieQuotes extends Component {

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
        console.log(json[0]);
        this.setState({movie: json[0].movie_title});
        this.setState({quote: json[0].body_text});
        this.setState({level: json[0].level_id})
    };

        // const p0=fetch('http://localhost:5000/quotes');
      // const p1=p0.then((res)=>{
      //     return res.json();
      // });
      // p1.then((json)=>{
      //     console.log(json);
      //     this.setState({quote:json[0].body_text})
      // });
      //console.log("get")
    // };

    // getMovie = async () => {
    //     const res= await fetch('http://localhost:5000/quotes');
    //     const json = await res.json();
    //     console.log(json[0]);
    //     this.setState({movie:json[0].movie_title});
    // };


    componentDidMount() {
        (async () => {
            try {
                await this.getQuote();
            } catch (err) {
                console.error(err)
            }
        })();
    }

    // componentDidMount() {
    //     (async () => {
    //         try {
    //             await this.getMovie();
    //         } catch (err) {
    //             console.error(err)
    //         }
    //     })();
    // }




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
                    <Button href="./Quotes">Next Question</Button>
                </div>
                <div>
                    <Footer />
                </div>

            </div>
        );
    }
}

export default MovieQuotes;