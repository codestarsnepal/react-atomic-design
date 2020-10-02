import React from 'react';
import Logo from './../atoms/Logo'
import SearchBar from './../molecules/SearchBar'
import './../../App.css'
import HeaderText from '../atoms/HeaderText';

function Header() {
    return (
        <div className="header">
            <Logo />
            <HeaderText />
            <SearchBar />
        </div>
    );
}

export default Header;
