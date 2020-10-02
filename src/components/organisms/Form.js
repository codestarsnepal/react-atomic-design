import React from 'react';
import FormSubmitBtn from '../atoms/FormSubmitBtn';
import Country from '../molecules/FormMolecules/Country';
import FirstName from '../molecules/FormMolecules/FirstName';
import LastName from '../molecules/FormMolecules/LastName';
import Subject from '../molecules/FormMolecules/Subject';
import './../../App.css'

function Form() {
    return (
        <div>
            <h2 style={{ marginTop: "-5px" }}>Contact Form</h2>
            <div className="form">
                <form>
                    <FirstName />
                    <LastName />
                    <Country />
                    <Subject />
                    <FormSubmitBtn />
                </form>
            </div>
        </div>
    );
}

export default Form;
