import React from 'react';
import { Box, Button } from '@material-ui/core';
import useStyles from './styles';
import LoginDialog from './Login/LoginDialog';

const NavButtons = () => {
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };
    const classes = useStyles();
    return (
        <Box className={classes.wrapper}>
            <Button
                className={classes.button}
                variant="contained"
                disableElevation
                onClick={handleClickOpen}
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
            <LoginDialog open={open} close={() => handleClose()} />
        </Box>
    )
}

export default NavButtons;
