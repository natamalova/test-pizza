import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import './css/Pizza.css';

class Pizza extends React.Component {
    
    constructor(props) {
        super(props);
        this.removeUnit = this.removeUnit.bind(this);
        this.addUnit = this.addUnit.bind(this);
        this.closeClick = this.closeClick.bind(this);
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
    
    closeClick(){
        this.props.closeClicked && this.props.closeClicked(this.props.data, this.props.position);
    }
    
    render() {
        return (
            <div className="pizza">
                <div className="pizza-img">
                    <img src={this.props.data.image} alt={this.props.data.image}/>
                </div>
                <div className="pizza-info">
                    <span onClick={this.closeClick} className="close" title="Close"><FontAwesomeIcon icon={faTimes} /></span>
                    <h2>{this.props.data.title}</h2>
                    <div className="pizza-info-price">{this.props.data.price}</div>
                    <div className="pizza-counter">
                        <span onClick={this.removeUnit}>-</span>
                        <span>{this.state.counter}</span>
                        <span onClick={this.addUnit}>+</span>
                    </div>
                    <p className="description">Описание</p>
                    <p className="pizza-structure">{this.props.data.structure}</p>
                    <div className="nutrition">
                        <span className="nutrition_item">{this.props.data.energyValue}</span>
                        <span className="nutrition_item">{this.props.data.weight}</span>
                        <br />
                        <span className="nutrition_item">Белки: {this.props.data.proteins}</span>
                        <span className="nutrition_item">Жиры: {this.props.data.fats}</span>
                        <span className="nutrition_item">Углеводы: {this.props.data.carbohydrates}</span>
                    </div>
                </div>
            </div>
        );
    }
}

Pizza.propTypes = {
    data: PropTypes.object.isRequired,
    position: PropTypes.number.isRequired,
    closeClicked: PropTypes.func
};

export default Pizza;