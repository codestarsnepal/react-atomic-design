import React from 'react';
import './../../../../App.css';

function SubjectInput() {
    return (
        <div className="SubjectInput">
            <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: "100px" }}></textarea>
        </div>
    );
}

export default SubjectInput;
