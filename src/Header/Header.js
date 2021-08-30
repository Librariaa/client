import React from 'react';
import { AppBar, Toolbar, IconButton, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import DrawerComp from '../Drawer/DrawerComp';
import SearchBar from './SearchBar';
import NavIcons from './NavIcons';
import useStyles from './styles';
import NavButtons from './NavButtons';

const Header = () => {
    const classes = useStyles();
    const [openDrawer, setopenDrawer] = React.useState(false);

    const openUpDrawer = () => {
        setopenDrawer(true)
    }

    const closeDrawer = () => {
        setopenDrawer(false)
    }

    return (
        <>
            <DrawerComp state={openDrawer} close={closeDrawer} />
            <AppBar position="static" className={classes.header}>
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        onClick={openUpDrawer}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography className={classes.title} variant="h6">
                        LIBRARIA
                    </Typography>
                    <SearchBar />
                    <NavButtons />
                    {/* <NavIcons /> */}
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header;
