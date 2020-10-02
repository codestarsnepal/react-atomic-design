import React from 'react';
import './../../../App.css';

function Country() {
    return (
        <div className="Country">
            <label for="country">Country</label>
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

export default Country;
