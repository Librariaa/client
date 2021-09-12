import React from 'react';
import useStyle from '../styles';
import SearchIcon from "@material-ui/icons/Search";
import { InputBase } from '@material-ui/core';

const SearchBar = () => {
    const classes = useStyle();
    return (
        <div className={classes.search}>
            <InputBase
                placeholder="Search…"
                classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput
                }}
                inputProps={{ 'aria-label': 'search' }}
            />
            <div className={classes.searchIcon}>
                <button className={classes.searchButton}>
                    <SearchIcon />
                </button>
            </div>
        </div>
    )
}

export default SearchBar
