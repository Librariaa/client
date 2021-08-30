import React from 'react';
import { Badge, Box, Button, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
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
            <Box display="flex">
                <Badge badgeContent={3} color='primary'>
                    <ShoppingCartIcon />
                </Badge>
                <Typography style={{ marginLeft: 10 }}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default NavButtons;
