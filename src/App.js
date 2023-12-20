import "./App.css";
import Navbar from "./components/navbar/Navbar";
import SubHeader from "./components/sub-header/SubHeader";
import Home from "./router/home/Home";
import Wishes from "./router/wishes/Wishes";
import Cart from "./router/cart/Cart";
import { Routes, Route } from "react-router-dom";
import NavbarBottom from "./components/navbar-bottom/NavbarBottom";
import Login from "./router/login/Login";
import NotFound from "./components/notFound/NotFound";
import { PRODUCTS } from "./static";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SingleRoute from "./router/single/SingleRoute";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <div className="App">
      <SubHeader />
      <Navbar data={PRODUCTS} />
      <NavbarBottom />
      <Routes>
        <Route path="/" element={<Home data={ PRODUCTS } />} />
        <Route path="/login" element={<Login />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path='/product/:id' element={< SingleRoute data={ PRODUCTS }/> } />


        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
      <Footer/>
    </div>
  );
}

export default App;
