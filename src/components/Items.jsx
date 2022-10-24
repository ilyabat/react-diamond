import React from 'react'

function Items({ title, desc, price, img, onAdd, item }) {
  return (
    <div className='items'>
      <div className='items__block'>

        <img className='items__img' src={"./img/" + img} alt="img" />

        <div className="items__block-text">

          <h1 className='items__title'>{title}</h1>

          <p className='items__desc'>{desc}</p>

          <div className="items__block-price">

            <b className='items__price'>{price}$</b>

            <div className="items__btn" onClick={() => onAdd(item)}>+</div>

          </div>

        </div>

      </div>
    </div>

  )
}
export default Items