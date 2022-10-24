import React from 'react'

function Order({ item }) {
    return (
        <div className='orders'>
            
            <img className='orders__img' src={"./img/" + item.img} alt="img" />

            <div className="orders__block-text">
                <h1 className='orders__title'>{item.title}</h1>
                <b className='orders__price'>{item.price}$</b>
            </div>
        </div>
    )
}

export default Order