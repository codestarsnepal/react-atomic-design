import React from 'react';
import quotes from './../atoms/QuotesDatabase';
import './../../App.css';
import NewQuoteButton from '../atoms/NewQuoteButton';
import QuoteAndAuthor from '../atoms/QuoteAndAuthor';

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
                <QuoteAndAuthor {...this.state} />
                <div className="butun">
                    <NewQuoteButton handleClick={this.handleClick} />
                </div>
            </div >

        );
    }
}

export default QuoteBox;