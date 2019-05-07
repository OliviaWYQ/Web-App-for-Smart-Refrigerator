import React from 'react';
import './Header.scss';
/**
 * @constructor <Header />
 * @description Top banner
 */

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header">
                < img className="banner-img" src = {require('./img/banner2.png')} / >
            </div>
        );
    }
}

export default Header;