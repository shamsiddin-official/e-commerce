import React from 'react'
import './Product.css'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5"
import "number-brm"
import { useDispatch,useSelector } from 'react-redux';
import { toggleWishes } from '../../contents/counterSlice';



function Product({data}) {
  const dispatch =useDispatch()
  const wishes =useSelector(s=> s.wishes.value)
  console.log(wishes);
  return (
    <div className="products__wrapper">

        {
            data?.map((el)=>{
                  
                return <div key={el.id} className="products__card">
                <div className="products__image">
                  <img src={el.url} alt="" />
                </div>
                <div className="products__body">
                  <p className="products__title">{el.title}</p>
                  <div style={{flex:1}}>
                  <span className="products__monthly">
                    {(el.price * 1.5 / 12)?.brm()} so'm oyiga
                  </span>
                  </div>
                  
                  <del> {(el.price*1.2)?.brm()} so'm</del>
                  <p className="products__price">{el.price?.brm()}so'm</p>
                </div>
                <div onClick={()=> dispatch(toggleWishes(el))} className="products__wishes">
                  {
                    wishes.some (item=> item.id===el.id)?<FaHeart style={{color:"var(--bg-py"}}/>: <FaRegHeart />
                  }
                 
                </div>
                <div className="products__cart">
                  <IoCartOutline />
                </div>
              </div>

            })
        }
     
    </div>
  )
}

export default Product