import React from 'react';
import FirstNameInput from '../../atoms/FormAtoms/Inputs/FirstNameInput';
import FirstNameLabel from '../../atoms/FormAtoms/Labels/FirstNameLabel';
import './../../../App.css';

function FirstName() {
    return (
        <div className="FirstName">
            <FirstNameLabel />
            <FirstNameInput />
        </div>
    );
}

export default FirstName;
