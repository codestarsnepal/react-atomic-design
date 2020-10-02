import React from 'react';
import './../../../App.css';

function FirstName() {
    return (
        <div className="FirstName">
            <label for="fname">First Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
        </div>
    );
}

export default FirstName;
