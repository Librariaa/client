import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
    header: {
        backgroundColor: '#2AA3A3'
    },
    menuButton: {
        marginRight: theme.spacing(0),
        [theme.breakpoints.up('sm')]: {
            marginRight: theme.spacing(2)
        }
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        }
    },
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#158484',
        marginRight: theme.spacing(0),
        marginLeft: 0,
        display: 'flex',
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(2),
            width: 'auto',
        }
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButton: {
        padding: 0,
        backgroundColor: 'inherit',
        color: '#fff',
        border: 'none'
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0.5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        }
    },
    icons: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-end"
    },
    wrapper: {
        display: 'flex',
        width: "100%",
        justifyContent: "flex-end",
        alignItems: 'center',
        marginLeft: 5,
        '&>*': {
            marginRight: 10,
        }
    },
    button: {
        width: '5ch',
        color: '#2AA3A3',
        backgroundColor: '#fff',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.1)',
            color: '#fff',
            boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
        },
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
        }
    }
}))