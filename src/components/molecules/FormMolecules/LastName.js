import React from 'react';
import './../../../App.css';

function LastName() {
    return (
        <div className="LastName">
            <label for="lname">Last Name</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
        </div>
    );
}

export default LastName;
