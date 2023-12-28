import React from 'react'
import "./Admin.css"
import { useNavigate, Routes , Route, NavLink } from 'react-router-dom'
import {ADMIN__ROUTES} from "../../static/adminRoutes"

function Admin() {
  const navigate = useNavigate()

  const handleLogOut = ()=>{
    if (window.confirm("Are you sure")){

      localStorage.removeItem("email")
      navigate("/login")
    }
    
    

  }
  return (
    <div className='admin'>
      <div className="admin__sidebar">
        <button onClick={()=> navigate("/")} className='admin__btn'> ⬅ Orqaga </button>
        <h2>Admin</h2>
       <div className='admin__links'>
        {
          ADMIN__ROUTES?.map((el,inx) =><NavLink key={inx} to={el.link}> {el.title} </NavLink> )
        }

        

       </div>
       <button onClick={handleLogOut}>Log out</button>
       </div>
      <div className="admin__content">
        <Routes>
        {
          ADMIN__ROUTES?.map((el,inx) =><Route key={inx} path={el.link} element={el.element}/> )
        }

          
        </Routes>
      </div>
    </div>
  )
}

export default Admin