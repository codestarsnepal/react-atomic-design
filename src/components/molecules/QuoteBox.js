import React from 'react';
import quotes from './../atoms/QuotesDatabase';
import './../../App.css';

class QuoteBox extends React.Component {
    constructor() {
        super();
        this.state = {
            quote: quotes[0].quote,
            author: quotes[0].author,
        };
    }

    handleClick = () => {
        const generateRandomQuote = this.randomQuote();
        this.setState({
            quote: generateRandomQuote.quote,
            author: generateRandomQuote.author
        });
        this.shuffleQuotes(quotes)
    }

    randomQuote() {
        const randomNum = Math.floor(Math.random() * quotes.length);
        return quotes[randomNum];
    }

    shuffleQuotes(array) {
        return array.sort(() => Math.random() - 0.5)
    }



    render() {
        return (
            <div style={{ backgroundColor: "#ccffcc" }} className="quotebox">
                <div className="fadeIn">
                    <h1 id="quote">"{this.state.quote}"</h1>
                    <h4 id="author">-{this.state.author}</h4>
                </div>
                <div className="butun">
                    <button id="newquote" onClick={this.handleClick}>New Quote</button>
                </div>
            </div >

        );
    }
}

export default QuoteBox;