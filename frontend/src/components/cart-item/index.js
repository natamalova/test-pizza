import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './css/CartItem.css';

class CartItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.minusUnit = this.minusUnit.bind(this);
        this.addUnit = this.addUnit.bind(this);
        this.removeUnit = this.removeUnit.bind(this);
        this.state = {
            counter: 1
        }
    }
    
    minusUnit() {
        if (this.state.counter > 1) {
            this.setState({counter: this.state.counter - 1})
        }
    }
    
    removeUnit() {
        alert('bla');
    }
    
    addUnit() {
        this.setState({counter: this.state.counter + 1})
    }
    
    render() {
        return (
            <tr className="cart-item">
                <td>
                    <Link to="/" title={this.props.data.title}>{this.props.data.title}</Link>
                </td>
                <td className="counter">
                    {this.state.counter > 1
                        ? <span onClick={this.minusUnit}>-</span>
                        : <span onClick={this.removeUnit}>x</span>
                    }
                    <span>{this.state.counter}</span>
                    <span onClick={this.addUnit}>+</span>
                </td>
                <td>
                    {this.props.data.price}
                </td>
            </tr>
        );
    }
}

CartItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default CartItem;