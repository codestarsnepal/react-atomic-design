import React from 'react';
import Search from '../atoms/Search';
import SearchButton from '../atoms/SearchButton';
import SearchLabel from '../atoms/SearchLabel';
import './../../App.css'

function SearchBar() {
    return (
        <div className="SearchBar">
            <SearchLabel /><div class="searchHere"><Search /> <SearchButton /></div>
        </div>
    );
}

export default SearchBar;
