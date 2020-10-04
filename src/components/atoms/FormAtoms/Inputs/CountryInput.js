import React from 'react';
import './../../../../App.css';

function CountryInput() {
    return (
        <div className="CountryInput">
            <select id="country" name="country">
                <option >Nepal</option>
                <option >India</option>
                <option >China</option>
                <option >USA</option>
                <option >Australia</option>
                <option >Canada</option>
            </select>
        </div>
    );
}

export default CountryInput;
