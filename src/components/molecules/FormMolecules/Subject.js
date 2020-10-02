import React from 'react';
import './../../../App.css';

function Subject() {
    return (
        <div className="Subject">
            <label for="subject">Subject</label>
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
        </div>
    );
}

export default Subject;
