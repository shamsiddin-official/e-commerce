import React from 'react'
import "./Home.css"
import Carousel from '../../components/carousel/Carousel'
import Product from '../../components/products/Product'
import {PRODUCTS} from "../../static/index"

function Home() {
  return (
    <div className='container'>
      <Carousel/>
      <Product data={PRODUCTS}/>
    </div>
  )
}

export default Home