import React from 'react';
import { makeStyles } from '@material-ui/core';
import Header from '../components/Navbars/Header';
import Footer from '../components/Footer/Footer'

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.dark,
        height: '100%',
        overflow: 'hidden',
        width: '100%'
    },
    contentContainer: {
        display: 'flex',
        flex: '1 1 auto',
        overflow: 'hidden'
    },
    content: {
        flex: '1 1 auto',
        padding: 25,
        height: '100%',
        overflow: 'auto'
    }
}));
const AdminLayout = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header />
            <div className={classes.contentContainer}>
                <div className={classes.content}>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AdminLayout;