import React from 'react';
import LastNameInput from '../../atoms/FormAtoms/Inputs/LastNameInput';
import LastNameLabel from '../../atoms/FormAtoms/Labels/LastNameLabel';
import './../../../App.css';

function LastName() {
    return (
        <div className="LastName">
            <LastNameLabel />
            <LastNameInput />
        </div>
    );
}

export default LastName;
