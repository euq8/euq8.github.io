import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Collapse, IconButton, Toolbar } from '@material-ui/core';
import SortIcon from '@material-ui/icons/Sort';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Link as Scroll } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
    },
    appbar: {
        background: 'none',
        fontFamily: 'Nunito',
    },
    appbarWrapper: {
        width: '95%',
        margin: '0 auto',
    },
    appbarTitle: {
        flexGrow: "1",
        fontSize: "3rem",
    },
    icon: {
        color: '#fff',
        fontSize: "3rem",
    },
    ashfaqueColor: {
        color: '#00ace6'
    },
    scale: {
        color: "#00bfff",
        fontFamily: 'Fira Code',
        fontSize: '5rem',
    },
    whiteColor: {
        color: '#fff',
        fontFamily: 'Nunito',
        fontSize: '5rem',
    },
    headline: {
        textAlign: 'left',
    },
    goDown: {
        color: "#00bfff",
        fontSize: "5rem",
    },
    goDownWrapper: {
        textAlign: 'center',
        alignItems: 'center',
    },
    headlineIconButtonWrapper: {
        textAlign: 'center',
    },
}));

export default function Headers() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(()=>{
        setChecked(true);
    });
    return (
        <div className={classes.root} id='header'>
            <AppBar className={classes.appbar} elevation={0}>
                <Toolbar className={classes.appbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        <span className={classes.ashfaqueColor}>ashfaque</span>hussain.</h1>
                    <IconButton>
                        <SortIcon className={classes.icon}/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Collapse
                in={checked}
                {...(checked ? {timeout: 1000} : {})}
                collapsedHeight={50}
            >
                <div className={classes.headlineIconButtonWrapper}>
                    <h1 className={classes.headline}>
                        <span className={classes.whiteColor}>Developing</span><br />
                        <span className={classes.scale}>Scalable</span><br />
                        <span className={classes.whiteColor}>Microservices for ChatBots.</span>
                    </h1>
                    <Scroll to="place-to-visit" smooth={true}>
                        <IconButton>
                            <ExpandMoreIcon className={classes.goDown} />
                        </IconButton>
                    </Scroll>
                </div>
            </Collapse>
        </div>
    );
}

// To be continued