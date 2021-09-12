import { AppBar } from '@material-ui/core';
import useStyles from '../styles';
import React from 'react';
import SearchBar from './SearchBar';

const Search = () => {
    const classes = useStyles();
    return (
        <AppBar position="static" style={{ backgroundColor: '#32e0e0' }}>
            <SearchBar />
        </AppBar>
    )
}

export default Search
