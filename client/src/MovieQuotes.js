import React, { useState, useEffect} from 'react';
import {Button, Col, Row} from "react-bootstrap";
import Footer from './components/Footer';

const MovieQuotes= ({gameId=-1}) =>{

    const [quotes, setQuotes] = useState([]);
    const [quoteIndex, setQuoteIndex] = useState(0);

    useEffect(async ()=>{
        const res = await fetch('http://localhost:5000/Games');
        const movieQuotes = await res.json();
        setQuotes(movieQuotes);
        setQuoteIndex(0)
    },[gameId]);

    const handleNextQuote=(e) => {
        e.preventDefault()
        setQuoteIndex(quoteIndex+1)
    }
    const movieQuote=quotes[quoteIndex] || {};


    return (
        <div className='movieArray'>
            <div className='question'>
                What movie contains this quote?
            </div>
            <div className='movieLine'>
                {movieQuote.body_text}
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
                        <h1> {movieQuote.level_id}</h1>
                    </Col>
                </Row>
            </div>
            <div className='movieTitle'>
                {movieQuote.movie_title}
            </div>

            <div className='tryAgain'>

                <button onClick={handleNextQuote}>Next Question</button>


            </div>
            <div>
                <Footer/>
            </div>

        </div>
    );
}



export default MovieQuotes;