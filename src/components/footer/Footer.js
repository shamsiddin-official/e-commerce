import React from "react";
import "./Footer.css";
import { FaApple } from "react-icons/fa6";
import { FaGooglePlay } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Footer() {
  const {pathname} =useLocation()
  if(pathname.includes("login")){
    return <></>
  }
  return (
    <div className="container">
    <div className="Footer">
      <ul>
        <h4>Biz haqimizda</h4>
        <li>Topshirish punktlari</li>
        <li>Vakansiyalar</li>
      </ul>
      <ul>
        <h4>Foydalanuvchilarga</h4>
        <li>Biz bilan bog'lanish </li>
        <li>Savol javob</li>
      </ul>
      <ul>
        <h4>Tadbirkorlarga</h4>
        <li>Uzumda soting</li>
        <li>Sotuvchi kabinetiga kirish</li>
      </ul>
      <ul>
        <h4>Ilovani yuklab olish</h4>
        <div className="icons">
          <FaApple /> <span>appstore</span>
          <FaGooglePlay /> <span>google play</span>
        </div>
        <h4>Uzum ijtimoiy tarmoqlarda</h4>
      </ul>

      
    </div>
    <div className="sub__footer">
    <div className="div1">
      <h2>Maxfiylik kelishuvi</h2>
      <h2>Foydalanuvchi kelishuvi</h2>
    </div>
     <div>
        <p>
      «2023© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar
      himoyalangan»
    </p>
    </div>
    
  </div>
  </div>
  );
}

export default Footer;
