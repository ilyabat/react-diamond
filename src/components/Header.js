import React from 'react'

export default function Header() {
    return (
        <header className='header'>
            <div>
                <span className="header__logo">DS</span>
                <ul className="header__menu">
                    <li>Про нас</li>
                    <li>Контакти</li>
                    <li>Профіль</li>

                </ul>
            </div>
            <div className="header__presentation"></div>
        </header>
    )
}
