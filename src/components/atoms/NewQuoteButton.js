import React from 'react';
import './../../App.css'

function NewQuoteButton(props) {
    return (
        <div className="NewQuoteButton">
            <button id="newquote" onClick={props.handleClick}>New Quote</button>
        </div>
    );
}

export default NewQuoteButton;
