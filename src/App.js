import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SubHeader from "./components/sub-header/SubHeader";
import Home from "./router/home/Home";
import Wishes from "./router/wishes/Wishes";
import Cart from "./router/cart/Cart";
import { Routes, Route } from "react-router-dom";
// import NavbarBottom from "./components/navbar-bottom/NavbarBottom";
import Login from "./router/login/Login";
import NotFound from "./components/notFound/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleRoute from "./router/single/SingleRoute";
import Footer from "./components/footer/Footer";
import Admin from "./router/admin/Admin";
import Auth from "./router/auth/Auth";
import { useEffect, useState } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from "./server/firebase";



function App() {
  const usersCollectionRef = collection(db, "products");
  const [data, setData]= useState([])
  
  useEffect(()=>{
    const getProducts = async () => {
      const data = await getDocs(usersCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getProducts();


  },[])
  return (
    <div className="App">
      <SubHeader />
      <Navbar data={data} />
      {/* <NavbarBottom /> */}
      <Routes>
        <Route path="/" element={<Home data={ data } />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={< SingleRoute data={ data }/> } />
        
        <Route path="/" element={<Auth/>} >
        <Route path="/admin/*" element={<Admin/>} />

        </Route>


        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
