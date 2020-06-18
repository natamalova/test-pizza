import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

import ProshutoFungi from './img/proshuto_fungi.jpg';

import './css/Pizza.css';

class Pizza extends React.Component {
    
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
            <div className="pizza">
                <span className="close" title="Close"><FontAwesomeIcon icon={faTimes} /></span>
                <div className="pizza-img">
                    <img src={ProshutoFungi} alt="bla"/>
                </div>
                <div className="pizza-info">
                    <h2>Прошутто Фунги</h2>
                    <div className="pizza-info-price">25$</div>
                    <div className="pizza-counter">
                        <span onClick={this.removeUnit}>-</span>
                        <span>{this.state.counter}</span>
                        <span onClick={this.addUnit}>+</span>
                    </div>
                    <p className="description">Описание</p>
                    <p className="pizza-structure">
                        Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина,
                        шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны,
                        сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер,
                        сыр Моцарелла, орегано, соус томатный
                    </p>
                    <div className="nutrition">
                        <span className="nutrition_item">1172 kcal.</span>
                        <span className="nutrition_item">370 гр.</span>
                        <br />
                        <span className="nutrition_item">Белки: 35.5 г</span>
                        <span className="nutrition_item">Жиры: 95.3 г</span>
                        <span className="nutrition_item">Углеводы: 43.0 г</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Pizza;