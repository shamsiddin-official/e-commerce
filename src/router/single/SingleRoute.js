import React, { useEffect } from 'react'
import './SingleRoute.css'
import { useParams } from "react-router-dom"
import NotFound from '../../components/notFound/NotFound'
import Product from '../../components/products/Product'


function SingleRoute({data}) {
    const params = useParams()
    const oneItem = data.find((el) => el.id === params.id)
    console.log(oneItem);
    useEffect(()=>{
      window.scrollTo(0, 0)

    },[params])
     
    if(!oneItem){
      return  <NotFound/> 
      

    }

  return (
    <>
    <div className='container single__box'>
   
        <div>
           <img src={oneItem.url}  alt="" className='single__img'/>
        </div>
        <div className='single__data'>
          <h1>{oneItem.title}</h1>
          <h2>{oneItem.price.brm()} so'm</h2>
          <h3>{oneItem.category}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sed quod nobis suscipit perferendis, laborum hic sapiente consequatur quidem saepe, accusamus, quae provident eos officiis.</p>
          <button className='single__btn'>Savatchaga qo'shish</button>
        </div>

    
    
    </div>
    <div className="container products">
      <h2>New Products</h2>
      <Product data={data.slice(0,5)}/>
      


    </div>
    </>
  )
}

export default SingleRoute