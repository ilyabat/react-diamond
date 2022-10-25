import React from 'react'
import { FaTrash } from 'react-icons/fa'

function Order({ item,onDelete }) {
    return (
        <div className='orders'>

            <img className='orders__img' src={"./img/" + item.img} alt="img" />

            <div className="orders__block-text">
                <h1 className='orders__title'>{item.title}</h1>
                <b className='orders__price'>{item.price}$</b>
                <FaTrash className='orders__delete' onClick={() => onDelete(item.id)} />
            </div>
        </div>
    )
}

export default Order