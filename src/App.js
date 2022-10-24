import Header from "./components/Header";
import Footer from "./components/Footer";
import React, { useState } from "react";
import Items from "./components/Items";
function App() {

  const products = [
    { id: '1', title: 'CoolChain', img: 'chain.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'chain', price: '1345.00' },
    { id: '2', title: 'CoolRing', img: 'ring.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'ring', price: '105.00' },
    { id: '3', title: 'BadChain', img: 'chain.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'chain', price: '2335.00' },
    { id: '4', title: 'BadRing', img: 'ring.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'ring', price: '345.00' },
    { id: '5', title: 'diamond', img: 'ring.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'ring', price: '345.00' },
    { id: '6', title: 'diamond', img: 'ring.jpg', desc: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum, iure.', category: 'ring', price: '345.00' },
  ]
  const order = []
  const [items, setItems] = useState(products)
  let [orders, setOrders] = useState(order)

  const addToOrder = (item) => {
    let isInArray = false
    orders.forEach(el => {
      if (el.id === item.id) {
        isInArray = true
      }
    })
    if (!isInArray) {
      setOrders(orders = [...orders, item])

    }
  }
  let ordersLenght = orders.length

  return (
    <div className="wrapper">

      <Header orders={orders} ordersLenght={ordersLenght} />
      <main>
        {
          items.map(item => {
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

      <Footer />
    </div>
  );
}

export default App;
