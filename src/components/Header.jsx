import React from 'react'

import Order from './Order';
import About from './About';

import { FaShoppingCart } from 'react-icons/fa'

import { Link } from 'react-router-dom';



export default function Header({ orders, ordersLenght, onDelete }) {

    const showOrders = orders => {
        let sumPrice = 0;
        orders.forEach(el => sumPrice += +el.price)
        return (
            <div className='shop-cart'>
                {
                    orders.map(el => {
                        return <Order onDelete={onDelete} key={el.id} item={el} />
                    })
                }
                <p className='all-price'>Ціна: {sumPrice}</p>
            </div>)

    }

    const showNothing = () => {
        return (
            <div className='nothing shop-cart'>
                В корзині товарів немає
            </div>
        )
    }

    let [cartOpen, setCartOpen] = React.useState(false);


    return (
        <header className='header'>
            <div>
                <span className="header__logo"><Link to={'/'}>DS</Link></span>

                <ul className="header__menu">
                    <li><Link to={'/about'}>Про нас</Link></li>
                    <li><Link to={'/contacts'}>Контакти</Link></li>
                    <li>Профіль</li>
                </ul>
                <FaShoppingCart onClick={() => setCartOpen(cartOpen = !cartOpen)} className={`header__cart ${cartOpen && 'header__active'}`} />

                {cartOpen && (
                    <div>
                        {
                            ordersLenght > 0 ? showOrders(orders) : showNothing()

                        }
                    </div>
                )}
            </div>
            <div className="header__presentation"></div>
        </header>
    )
}
