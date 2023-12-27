import React, { useEffect, useState } from 'react'
import "./Navbar.css"
import { CiSearch } from "react-icons/ci";
import { FaRegUser, FaRegHeart  } from "react-icons/fa";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoHomeOutline, IoMenu } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Sidebar from '../side-bar/Sidebar';

function Navbar({data}) {

  const [value, setValue]= useState("")
  const [searchData, setSearchData]= useState([])
  const [show, setShow] = useState(false)
  const { pathname } = useLocation();

  document.body.style.overflow = show ? "hidden" : "auto"



  useEffect(()=> {
    if(value.trim()){

      setSearchData(data.filter(el => el.title.toLowerCase().includes(value.toLowerCase().trim())))
    }else{
      setSearchData([])
    }

  }, [value])
  
  if(pathname.includes("login") || pathname.includes("admin")){
    return <></>
  }
  return (
    <div className='container'>
      <div className="navbar">
        <h2 className="nav__logo">
          <NavLink to={"/"}>SHAMSIDDIN</NavLink>
        </h2>
        <button onClick={()=>setShow(true)} className='nav__category'>
          <IoMenu/>
          <span>Katalog</span>
        </button>
        <div className="nav__search">
          <input 
          value={value}
          onChange={e=> setValue(e.target.value) }
          
          type="text" placeholder='Qidirish' />
          <button><CiSearch/></button>
          {
            value.trim() ? 
            <div on className="nav__search__drop">
            <p>Topilgan mahsulotlar: <b>{searchData.length ? `${searchData.length} ta ` : "yo'q" } </b></p>
            {
              searchData?.slice(0, 5)?.map((el)=>
              <div className='nav__search__item' key={el.id}>
                <img src={el.url} width={40} alt="" />
                <div>
                  <p>{el.title}</p>
                  <h4>{el.price?.brm()} so'm</h4>
                </div>
              </div>
              )
            }
            {
              !searchData.length && <div className='nav__search__notfound'>
                <img src="https://uzum.uz/static/img/penguin.a739ac8.png" alt="" />
              </div>
            }
            
          </div> 
          : <></>
          }

          
        </div>
        <ul className='nav__collection'>
          <li className="nav__item nav__home">
            <NavLink to={"/"}>
              <IoHomeOutline/>
              <span>Asosiy sahifa</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/admin/create-product"}>
              <FaRegUser/>
              <span>Kirish</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/wishes"}>
              <FaRegHeart/>
              <span>Saralanganlar</span>
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink to={"/cart"}>
              <AiOutlineShoppingCart/>
              <span>Savat</span>
            </NavLink>
          </li>
        </ul>
      </div>
      <Sidebar show ={show} setShow={setShow}/>
    </div>
  )
}

export default Navbar