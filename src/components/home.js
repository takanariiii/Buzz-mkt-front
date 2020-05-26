import React from 'react';
import Img from 'react-image'
import { makeStyles } from "@material-ui/core/styles";

import Header from 'components/header/header'
import HeaderLinks from "components/header/headerLinks";
import SiteImage from 'img/Buzz-mkt-Top-Logo.png';
import GridItem from 'components/grid/gridItem'
import GridContainer from 'components/grid/gridContainer'
import Parallax from 'components/parallax/parallax'
import RankingTab from 'components/ranking/rankingTab'

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
    const classes = useStyles();
    const { ...rest } = props;
    return (
        <div>
            <Header
                brand="Buzz Market"
                rightLinks={<HeaderLinks />}
                fixed
                color="dark"
                changeColorOnScroll={{
                    height: 400,
                    color: "dark"
                }}
                {...rest}
            />
            <Parallax image={require("img/Buzz-mkt.png")}>
                <div className={classes.container}>
                    <GridContainer>
                        <GridItem>
                            <div className={classes.brand}>
                                <h1 className={classes.title} >Buzz Market</h1>
                                <h3 className={classes.subtitle}>
                                    リアルなユーザの口コミによるランキングサイト
                                </h3>
                            </div>
                        </GridItem>
                    </GridContainer>
                </div>
            </Parallax>
            <div align="center">
                <h3>Twitterトレンドランキング</h3>
                <RankingTab />
            </div>
        </div>
    )
};
