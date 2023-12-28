import React from 'react'
import './Product'

function Skeleton() {
  return (
    <>
    <div className="products__wrapper">
    {
        new Array(5).fill("").map((_, inx)=>
        <div className='products__card'>
        <div className="skeleton__image skeleton__animated"></div>
        <div className="skeleton__title skeleton__animated"></div>
        <div className="skeleton__title skeleton__animated"></div>
        <div className="skeleton__title skeleton__animated"></div>
    </div>
        )
    }
    </div>
    
   
    </>
  )
}

export default Skeleton