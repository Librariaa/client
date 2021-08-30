import { makeStyles, alpha, FormHelperText } from "@material-ui/core";

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
    }
}))