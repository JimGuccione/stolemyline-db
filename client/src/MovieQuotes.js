import React, {Component} from 'react';

class MovieQuotes extends Component {

    constructor(props) {
        super(props);
        this.state={
            quote:'blah'
        }
    }

    getQuote = async () => {
        const res= await fetch('http://localhost:5000/quotes');
        const json = await res.json();
        console.log(json[0]);
        this.setState({quote:json[0].body_text});
        // const p0=fetch('http://localhost:5000/quotes');
      // const p1=p0.then((res)=>{
      //     return res.json();
      // });
      // p1.then((json)=>{
      //     console.log(json);
      //     this.setState({quote:json[0].body_text})
      // });
      //console.log("get")
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
        return (
            <div>
                {quote}
            </div>
        );
    }
}

export default MovieQuotes;