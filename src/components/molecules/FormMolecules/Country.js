import React from 'react';
import CountryInput from '../../atoms/FormAtoms/Inputs/CountryInput';
import CountryLabel from '../../atoms/FormAtoms/Labels/CountryLabel';
import './../../../App.css';

function Country() {
    return (
        <div className="Country">
            <CountryLabel />
            <CountryInput />
        </div>
    );
}

export default Country;
