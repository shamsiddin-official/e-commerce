import React from 'react'
import "./Wishes.css"
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import Product from '../../components/products/Product'

function Wishes() {
  const wishes = useSelector( s=> s.wishes.value)
  console.log(wishes);
  return (
    <div className='container'>
      <div className='all__users'>
    {
      !wishes.length ?
          <Empty
        title="Sizga yoqqanini qoʻshing"
        url="https://uzum.uz/static/img/hearts.cf414be.png"
        desc="Mahsulotdagi ♡ belgisini bosing. Akkauntga kiring va barcha saralanganlar saqlanib qoladi"
        btnTitle="Akkauntga kirish"
        link="/login"
      />:
      <Product data={wishes}/>
    }
      
      <Product/>
    </div>
     

    </div>
  )
}

export default Wishes