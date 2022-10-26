import Header from "./components/Header";
import Footer from "./components/Footer";
import Categories from "./components/Categories";


import { BrowserRouter, Routes, Route } from "react-router-dom"
import React, { useState } from "react";
import About from "./components/About";
import Item from "./components/Item";
import Contact from "./components/Contact";



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
  const currentItems = []
  const [items, setItems] = useState(products)
  const [currentItem, setCurrentItem] = useState(products)
  let [orders, setOrders] = useState(order)

  let ordersLenght = orders.length

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

  const deleteOrder = id => {
    setOrders(orders = orders.filter(el => el.id !== id))
  }

  const chooseCategories = category => {
    if (category === 'all') {
      setCurrentItem(items)
      return
    }
    setCurrentItem(items.filter(el => el.category === category))
  }



  return (
    <div className="wrapper">
      <BrowserRouter>
        <Header orders={orders} ordersLenght={ordersLenght} onDelete={deleteOrder} />

        <Routes>

          <Route path='/about' element={<About />} />

          <Route path='/contacts' element={<Contact />} />

          <Route path="/" element={
            <div>
              <Categories chooseCategories={chooseCategories} />
              <Item currentItem={currentItem} addToOrder={addToOrder} />
            </div>
          }
          />

        </Routes>
        <Footer />


      </BrowserRouter>
    </div>
  );
}

export default App;
