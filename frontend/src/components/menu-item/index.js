import React from 'react';
import PropTypes from 'prop-types';

import './css/MenuItem.css';

class MenuItem extends React.Component {
    
    constructor(props) {
        super(props);
        this.removeUnit = this.removeUnit.bind(this);
        this.addUnit = this.addUnit.bind(this);
        this.pizzaClick = this.pizzaClick.bind(this);
        this.state = {
            counter: 0
        }
    }
    
    pizzaClick() {
        this.props.pizzaClicked && this.props.pizzaClicked(this.props.data, this.props.position);
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
            <div className={'menu-item ' + (this.props.data.isClicked ? 'active' : '')}>
                <img onClick={this.pizzaClick} src={this.props.data.image} alt={this.props.data.image}/>
                <p className="menu-item-title">
                    {this.props.data.title}
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
    data: PropTypes.object.isRequired,
    pizzaClicked: PropTypes.func,
    position: PropTypes.number.isRequired
};

export default MenuItem;