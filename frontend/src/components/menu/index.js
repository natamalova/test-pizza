import React from 'react';
import { Link } from 'react-router-dom';

import MenuItem from '../menu-item';

import ProshutoFungi from './img/proshuto_fungi.jpg';

import './css/Menu.css';

const data = [
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    },
    {
        image: ProshutoFungi,
        title: 'Прошутто Фунги',
        structure: 'Ветчина, шампиньоны, сыр Чеддер, сыр Моцарелла, орегано, соус томатный',
        price: '25$'
    }
];

class Menu extends React.Component {
    render() {
        return (
            <div className="content">
                <h1>Pizza</h1>
                <h2>MENU</h2>
                <div className="menu">
                    {data.map((item, key) =>
                        <MenuItem key={key} data={item}/>
                    )}
                </div>
            </div>
        );
    }
}

export default Menu;