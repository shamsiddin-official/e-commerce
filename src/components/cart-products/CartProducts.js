import React, {useState,useEffect} from 'react'
import "./CartProducts.css"
import { FaRegTrashAlt } from "react-icons/fa"
import { useDispatch } from 'react-redux'
import { deleteAllCart, incCart } from '../../contents/cartSlice'
import { decCart,removeCart } from '../../contents/cartSlice'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'


const botToken ="6816468984:AAG3mHMx2ofOQ78fTy_Ej9Qpk_YywAstjaQ"
// https://api.telegram.org/bot6816468984:AAG3mHMx2ofOQ78fTy_Ej9Qpk_YywAstjaQ/getUpdates
const chat__id = "-4052138634"
const MyId = "270738572"

function CartProducts({data}) {
    const dispatch= useDispatch()
    const [name, setName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [address, setAddress] = useState("")
  const [message, setMessage] = useState("")

  useEffect(()=>{
    window.scrollTo(0, 0)

  },[])

  const handleSubmit = (e)=> {
    e.preventDefault()
    let order = "<b>buyurtma:</b>  %0A %0A"
    order += `ism: ${name}  %0A`
    order += `tel: ${phoneNumber}  %0A`
    order += `adres: ${address}  %0A`
    order += `habar: ${message}  %0A %0A`

    data.forEach(el => {
        order += `<b>nomi:</b> ${el.title} %0A`
        order += `<b>miqdori:</b> ${el.quantity} %0A `
        order += `<b>narxi:</b> ${el.price} %0A %0A`
        
        
    });
    order += `<b>jami:</b> ${data.reduce((a,b) => a + b.price * b.quantity, 0)?.brm()} so'm`

    let url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat__id}&text=${order}&parse_mode=html`
    let API = new XMLHttpRequest()
    API.open("GET", url, true)
    API.send()
    dispatch(deleteAllCart())
    
    toast.success("Buyurtmangiz qabul qilindi. Qisqa vaqtda aloqaga chiqamiz!😊")
  }
  return (
    <div className='cart__wrapper'>
        <div className="cart__products">
            {
                data?.map(el =><div className='cart__item' key={el.id}>
                    <Link to={`/product/${el.id}`} className='cart__item__left'>
                    <img src={el.url} width={80} alt="" />
                    <div>
                        <h4>{el.title}</h4>
                        <p>Kategoriya : {el.category}</p>

                    </div>
                    </Link>
                    <div className="cart__item__right">
                        <div className="cart__item__btns">
                            <button disabled={el.quantity <= 1} onClick={()=>dispatch(decCart(el))} >-</button>
                            <button>{el.quantity}</button>
                            <button onClick={()=>dispatch(incCart(el))}>+</button>
                        </div>
                        <div>
                            <button onClick={()=>dispatch(removeCart(el))} className='cart__trash__btn'>
                                <FaRegTrashAlt/>
                            </button>
                            <h3>{el.price?.brm()}so'm</h3>
                            <p>{el.quantity * el.price}</p>
                        </div>


                    </div>
                    
                </div> )
            }

        </div>
        <form onSubmit={handleSubmit} action="" className="cart__register">
            <h3>Quyidagi ma'lumotlarni to'ldiring:</h3>

            <input value={name} onChange={(e)=> setName(e.target.value)} required type="text" name="" id="" placeholder='Toliq ismingiz' />
            <input value={phoneNumber} onChange={(e)=> setPhoneNumber(e.target.value)} required type="text" name="" id="" placeholder='+998 00 -000-00-00' />
            <input value={address} onChange={(e)=> setAddress(e.target.value)} required type="text" name="" id="" placeholder='Manzilingiz' />
            <input value={message} onChange={(e)=> setMessage(e.target.value)} required type="text area" name="" id=""placeholder='Habar yollash' />

            <div className='total__price'>
                <p>Umumiy narx:</p>
                <b> {data.reduce((a,b) => a + b.price * b.quantity, 0)?.brm()} so'm</b>
            </div> 
            <button className='register__btn'> Rasmiylashtirishga o'tish</button>
           


        </form>

    </div>
  )
}

export default CartProducts