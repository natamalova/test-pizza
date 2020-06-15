import React from 'react';
import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import './css/Header.css';

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav className="header-navigation">
                    <ul className="header-menu">
                        <li>
                            <Link to="/">Main</Link>
                        </li>
                        <li>
                            <Link to="/">About us</Link>
                        </li>
                        <li>
                            <Link to="/">Delivery</Link>
                        </li>
                    </ul>
                </nav>
                <div className="cart">
                    {/*<FontAwesomeIcon icon={faShoppingCart} />*/}
                    <span>1/500</span>
                </div>
            </div>
        );
    }
}

export default Header;