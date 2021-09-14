import { AppBar } from '@material-ui/core';
import React from 'react';
import SearchBar from './SearchBar';

const Search = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#32e0e0' }}>
            <SearchBar />
        </AppBar>
    )
}

export default Search;
