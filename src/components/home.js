import React, { Component } from 'react';
import Img from 'react-image'

import Header from './header'
import SiteImage from 'img/Buzz-mkt-Top-Logo.png';
import GridItem from './grid/gridItem'

class Home extends Component {

    // componentDidMount(){
    // }

    render() {
        return (

            < React.Fragment >
            <div>
                <Header />
            </div>
            <div className="site-image">
                <GridItem>
                    <Img src={SiteImage} alt="サイトイメージ" />
                </GridItem>
            </div>
            <div className="Home_main">
                ホームページのメイン領域
                ${window.location.origin}
                ${process.env.PUBLIC_URL}/public
            </div>
            </React.Fragment >
        );

    }
}

export default Home;
