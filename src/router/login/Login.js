import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login__wrapper">
      <h2>Tizimga kirish</h2>

      <form className="login__form" action="">
        <div>
          <h3>Foydalanuvchi nomi</h3>
          <input type="text" />
        </div>
        <div>
          <h3>Parol</h3>
          <input type="password" />
          <Link className="link">Parolni unutdingizmi?</Link>
        </div>
      </form>
      <button className="login__btn"> Kirish </button>

      <div>
        <Link  to="/" className="link"> Uyga qaytish </Link> &
        <Link className="link"> Ro'yxatdan o'tish </Link>
      </div>
    </div>
  );
}

export default Login;
