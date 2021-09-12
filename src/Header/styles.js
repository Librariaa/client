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
    search: {
        borderRadius: theme.shape.borderRadius,
        backgroundColor: '#158484',
        margin: '5px auto',
        display: 'flex',
        width: '70%'
    },
    searchIcon: {
        padding: 5,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    searchButton: {
        padding: '0 5',
        backgroundColor: 'inherit',
        color: '#fff',
        border: 'none',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255, 0.1)',
            color: '#fff',
            cursor: "pointer"
        }
    },
    inputRoot: {
        color: 'inherit',
        width: '100%'
    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(0.5)}px)`
    },
    title: {
        fontFamily: ['Josefin Sans', 'sans-serif'].join(',')
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
        marginLeft: 5,
        '&>*': {
            marginLeft: 10,
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