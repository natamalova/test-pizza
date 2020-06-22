import React from 'react';

import MenuItem from '../menu-item';
import Pizza from '../pizza';

import ProshutoFungi from './img/proshuto_fungi.jpg';

import './css/Menu.css';

let data = [
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$',
        isClicked: false,
        energyValue: '3516 kcal.',
        weight: '420 гр.',
        proteins: '106.5 г',
        fats: '124.8 г',
        carbohydrates: '119.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '50$',
        isClicked: false,
        energyValue: '589 kcal.',
        weight: '370 гр.',
        proteins: '29.5 г',
        fats: '71.3 г',
        carbohydrates: '22.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '35$',
        isClicked: false,
        energyValue: '1172 kcal.',
        weight: '370 гр.',
        proteins: '35.5 г',
        fats: '95.3 г',
        carbohydrates: '43.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$',
        isClicked: false,
        energyValue: '589 kcal.',
        weight: '370 гр.',
        proteins: '29.5 г',
        fats: '71.3 г',
        carbohydrates: '22.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '45$',
        isClicked: false,
        energyValue: '2344 kcal.',
        weight: '450 гр.',
        proteins: '78.5 г',
        fats: '119.3 г',
        carbohydrates: '86.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$',
        isClicked: false,
        energyValue: '589 kcal.',
        weight: '370 гр.',
        proteins: '29.5 г',
        fats: '71.3 г',
        carbohydrates: '22.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$',
        isClicked: false,
        energyValue: '589 kcal.',
        weight: '370 гр.',
        proteins: '29.5 г',
        fats: '71.3 г',
        carbohydrates: '22.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '19$',
        isClicked: false,
        energyValue: '1172 kcal.',
        weight: '370 гр.',
        proteins: '35.5 г',
        fats: '95.3 г',
        carbohydrates: '43.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '36$',
        isClicked: false,
        energyValue: '1172 kcal.',
        weight: '370 гр.',
        proteins: '35.5 г',
        fats: '95.3 г',
        carbohydrates: '43.0 г'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '55$',
        isClicked: false,
        energyValue: '589 kcal.',
        weight: '370 гр.',
        proteins: '29.5 г',
        fats: '71.3 г',
        carbohydrates: '22.0 г'
    }
];

class Menu extends React.Component {
    
    constructor(props) {
        super(props);
        this.pizzaClick = this.pizzaClick.bind(this);
        this.closeClick = this.closeClick.bind(this);
        this.state = {
            data: data,
            selectedItem: null,
            selectedItemPosition: null
        }
    }
    
    pizzaClick(item, position) {
        let tempData = this.state.data;
        
        for(let tempItem of tempData) {
            tempItem.isClicked = false;
        }
        
        item.isClicked = true;
        tempData[position] = item;
        
        this.setState({
            data: tempData,
            selectedItem: item,
            selectedItemPosition: position
        });
    }
    
    closeClick(item, position) {
        let tempData = this.state.data;
    
        for(let tempItem of tempData) {
            tempItem.isClicked = false;
        }
    
        item.isClicked = false;
        tempData[position] = item;
    
        this.setState({
            data: tempData,
            selectedItem: null,
            selectedItemPosition: null
        });
    }
    
    render() {
        return (
            <div className="content">
                <h1>Pizza</h1>
                <h2>MENU</h2>
                <div className="menu">
                    {this.state.data.map((item, key) =>
                        <MenuItem pizzaClicked={this.pizzaClick} key={key} position={key} data={item}/>
                    )}
                </div>
                {this.state.selectedItem && (
                    <Pizza closeClicked={this.closeClick} position={this.state.selectedItemPosition} data={this.state.selectedItem}/>
                )}
            </div>
        );
    }
}

export default Menu;