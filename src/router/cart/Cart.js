import React from 'react'
import "./Cart.css"
import Empty from '../../components/empty/Empty'
import CartProducts from '../../components/cart-products/CartProducts'
import { UseSelector, useSelector } from 'react-redux/es/hooks/useSelector'

function Cart() {
  let cart= useSelector(s=>s.cart.value)
  console.log(cart);
  return (
    <div className='container'>
      {
        !cart.length ? <Empty 
        title="Savatda hozircha mahsulot yoʻq"
        url="https://uzum.uz/static/img/shopocat.490a4a1.png"
        desc="Bosh sahifadagi to’plamlardan boshlang yoki kerakli mahsulotni qidiruv orqali toping"
        btnTitle="Bosh sahifa"
        link="/"
      />
      :
       <CartProducts data={cart}/>
      }
     
     
    </div>
  )
}

export default Cart