import React from 'react';
import './../../App.css';
import { navItems } from './../atoms/NavAtom'

function NavBar() {
    return (
        <div className="NavBar">
            <ul>
                {
                    navItems.map((item, i) => {
                        return <li key={i}>{item}</li>
                    })
                }
            </ul>
        </div>
    );
}

export default NavBar;
