import React from 'react';
import { Box, IconButton, Badge, Menu, MenuItem, Typography } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import useStyles from './styles';

const NavIcons = () => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const menuId = 'primary-search-account-menu';

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    return (
        <>
            <div className={classes.icons}>
                <IconButton color="inherit">
                    <Badge badgeContent={17} color="primary">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <Box display="flex">
                    <IconButton color="inherit">
                        <Badge badgeContent={3} color="primary">
                            <ShoppingCartIcon />
                        </Badge>
                        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
                    </IconButton>
                </Box>
                <IconButton
                    color="inherit"
                    edge="end"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleProfileMenuOpen}
                >
                    <AccountCircle />
                </IconButton>
            </div>
            {renderMenu}
        </>
    )
}

export default NavIcons;
