import React from 'react';
import { Box, Button } from '@material-ui/core';
import useStyles from './styles';

const NavButtons = () => {
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Button
                className={classes.button}
                variant="contained"
                disableElevation
            >
                Login
            </Button>
            <Button
                className={classes.button}
                variant="contained"
                disableElevation
            >
                SignUp
            </Button>
        </Box>
    )
}

export default NavButtons;
