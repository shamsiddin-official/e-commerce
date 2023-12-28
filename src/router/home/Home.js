import React from 'react'
import "./Home.css"
import Carousel from '../../components/carousel/Carousel'
import Product from '../../components/products/Product'
import Skeleton from '../../components/products/Skeleton'


function Home({data}) {
  return (
    <div className='container'>
      <Carousel/>
      {
        data.length ? 

        <Product data={data}/>
        :
        <Skeleton/>
      }
      
    </div>
  )
}

export default Home