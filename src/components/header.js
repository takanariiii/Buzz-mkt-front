import React /*, { Component }*/ from 'react';
// nodejs library that concatenates classes
//import classNames from "classnames";

//import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/core/Menu';
import Button from "@material-ui/core/Button";
import Typography from '@material-ui/core/Typography';

import styles from "assets/jss/material-kit-react/components/headerStyle";

//const useStyles = makeStyles(styles);

export default function Header(props) {
    /*const classes = useStyles();

    const { color, rightLinks, leftLinks, brand, fixed, absolute } = props;

    const appBarClasses = classNames({
        [classes.appBar]: true,
        [classes[color]]: color,
        [classes.absolute]: absolute,
        [classes.fixed]: fixed
    });*/

    return (
        <AppBar className="Header">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" >
                    News
                </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}