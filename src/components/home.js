import React, { Component } from 'react';
import Img from 'react-image'

import SiteImage from '../img/Buzz-mkt-Top-Logo.png';

class Home extends Component {

    // componentDidMount(){
    // }

    render() {
        return (

            < React.Fragment >
            <div className="header">ヘッダー</div>
            <div className="site-image">
                <Img src={SiteImage} alt="サイトイメージ" />
            </div>
            <div className="Home_main">
                ホームページのメイン領域
            </div>
            </React.Fragment >
        );

    }
}

export default Home;
