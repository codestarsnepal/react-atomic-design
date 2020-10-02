import React from 'react';
import './../../App.css'

function QuoteAndAuthor(props) {
    return (
        <div className="fadeIn">
            <h1 id="quote">"{props.quote}"</h1>
            <h4 id="author">-{props.author}</h4>
        </div>
    );
}

export default QuoteAndAuthor;
