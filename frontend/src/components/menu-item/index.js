import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import './css/MenuItem.css';

class MenuItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.removeUnit = this.removeUnit.bind(this);
        this.addUnit = this.addUnit.bind(this);
        this.state = {
            counter: 0
        }
    }
    
    removeUnit() {
        if (this.state.counter > 0) {
            this.setState({counter: this.state.counter - 1})
        }
    }
    
    addUnit() {
        this.setState({counter: this.state.counter + 1})
    }
    
    render() {
        return (
            <div className="menu-item">
                <Link to="/">
                    <img src={this.props.data.image} alt="bla"/>
                </Link>
                <p className="menu-item-title">
                    <Link to="/">{this.props.data.title}</Link>
                </p>
                <p className="menu-item-data">
                    {this.props.data.structure}
                </p>
                <div className="menu-item-bottom">
                    <div className="price">{this.props.data.price}</div>
                    <div className="counter">
                        <span onClick={this.removeUnit}>-</span>
                        <span>{this.state.counter}</span>
                        <span onClick={this.addUnit}>+</span>
                    </div>
                </div>
            </div>
        );
    }
}

MenuItem.propTypes = {
    data: PropTypes.object.isRequired
};

export default MenuItem;