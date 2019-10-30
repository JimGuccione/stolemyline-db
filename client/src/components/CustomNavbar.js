import React, {Component} from 'react';

import './CustomNavbar.css';

class CustomNavbar extends Component {
    render() {
        return (
            <div className='menuBackDrop'>
                <div className="dropdown">
                    <button className="dropbtn">StoleMyLine</button>
                    <div className="dropdown-content">
                        <a href='/'>HOME</a>
                        <a href='/Quotes'>Movie Lines</a>
                        <a href="/components/Actor">Name the Actor</a>
                        <a href="/components/Character">Everybody Take 5</a>
                        <a href="/components/LandingPage">All SML Games</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomNavbar;