import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import Cart from '../cart';

import './css/Header.css';

class Header extends React.Component {
    
    constructor(props) {
        super(props);
        this.handleEnter = this.handleEnter.bind(this);
        this.handleLeave = this.handleLeave.bind(this);
        this.state = {
            isHovered: false,
        }
    }
    
    handleEnter() {
        this.setState({
            isHovered: true
        });
    }
    
    handleLeave() {
        this.setState({
            isHovered: false
        });
    }
    
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
                <div
                    onMouseEnter={this.handleEnter.bind(this)}
                    onMouseLeave={this.handleLeave.bind(this)}
                    className="cart-button">
                    <FontAwesomeIcon icon={faShoppingCart} />
                    <span>1/500$</span>
                    {this.state.isHovered && (
                            <Cart/>
                        )}
                </div>
            </div>
        );
    }
}

export default Header;