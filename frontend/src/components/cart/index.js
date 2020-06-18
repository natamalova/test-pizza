import React from 'react';
import { Link } from 'react-router-dom';

import CartItem from '../cart-item';

import './css/Cart.css';

const data = [
    {
        title: 'Прошутто Фунги',
        price: '50$'
    },
    {
        title: 'Фунги',
        price: '50$'
    },
    {
        title: 'Прошутто',
        price: '25$'
    }
];

class Cart extends React.Component {
    render() {
        return (
            <div className="cart">
                <h3>Корзина заказа</h3>
                <table className="cart-list">
                    <tbody>
                        {data.map((item, key) =>
                            <CartItem key={key} data={item}/>
                        )}
                    </tbody>
                </table>
                <div className="cart-total">
                    Всего: <span>100$</span>
                </div>
                <div className="button">
                    <button>
                        <Link to="/">Make order</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default Cart;