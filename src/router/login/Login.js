import React, { useState } from "react";
import "./Login.css";
import { useNavigate, Link } from "react-router-dom";
import {auth} from '../../server/firebase'
import {createUserWithEmailAndPassword,signInWithEmailAndPassword,getAuth} from 'firebase/auth'
import { toast } from "react-toastify";
function Login() {
  const [email, setEmail]= useState("")
  const [password, setPassword]= useState("")
  const navigate = useNavigate()

  const handleSignup = async (e)=>{
    e.preventDefault()
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, `${email}@gmail.com`, password);
      console.log('User created:', userCredential.user);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
    

   

  }
  const authentiction = getAuth()
  const handleSignIn = async (e)=>{
    e.preventDefault()
    await signInWithEmailAndPassword(authentiction,`${email}@gmail.com`, password)
    .then(()=>{
      console.log("succesfully sign in");
      toast.success("Hush kelibsiz")
      localStorage.setItem("email", email)
      navigate("/admin/create-product")

    })
    .catch(()=>{
      console.log("username or password is incorrect");
      toast.error("email yoki parol hato")

    })

  }
  return (
    <div className="login__wrapper">
      <h2>Tizimga kirish</h2>

      <form onSubmit={handleSignIn} className="login__form" action="">
        <div>
          <h3>Foydalanuvchi nomi</h3>
          <input required value={email} onChange={(e)=>setEmail(e.target.value)} type="text" />
        </div>
        <div>
          <h3>Parol</h3>
          <input required value={password} onChange={(e)=>setPassword(e.target.value)} type="password" />
          <Link className="link">Parolni unutdingizmi?</Link>
        </div>
      <button className="login__btn"> Kirish </button>
      </form>

      <div>
        <Link  to="/" className="link"> Uyga qaytish </Link> &
        <Link className="link"> Ro'yxatdan o'tish </Link>
      </div>
    </div>
  );
}

export default Login;
