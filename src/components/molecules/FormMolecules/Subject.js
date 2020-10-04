import React from 'react';
import SubjectInput from '../../atoms/FormAtoms/Inputs/SubjectInput';
import SubjectLabel from '../../atoms/FormAtoms/Labels/SubjectLabel';
import './../../../App.css';

function Subject() {
    return (
        <div className="Subject">
            <SubjectLabel />
            <SubjectInput />
        </div>
    );
}

export default Subject;
