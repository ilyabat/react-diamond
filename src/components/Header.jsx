import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import Order from './Order';



export default function Header({orders, ordersLenght}) {

    const showOrders = orders => {
        return (
            <div className='shop-cart'>
                {
                    orders.map(el => {
                        return <Order key={el.id} item={el} />
                    })
                }
            </div>)

    }
    const showNothing = () => {
        return (<div className='nothing shop-cart'>
            В корзині товарів немає
        </div>)
    }
    let [cartOpen, setCartOpen] = React.useState(false);


    return (
        <header className='header'>
            <div>
                <span className="header__logo">DS</span>

                <ul className="header__menu">
                    <li>Про нас</li>
                    <li>Контакти</li>
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