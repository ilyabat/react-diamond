import React from 'react'
import Items from "./Items";

function Item({ currentItem, addToOrder }) {
    return (

        <main>
            {
                currentItem.map(item => {
                    return <Items
                        key={item.id}
                        title={item.title}
                        img={item.img}
                        desc={item.desc}
                        price={item.price}
                        onAdd={addToOrder}
                        item={item}
                    />
                })
            }
        </main>
    )
}

export default Item