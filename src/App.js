import './App.css';
import Navbar from './components/navbar/Navbar';
import SubHeader from './components/sub-header/SubHeader';
import Home from "./router/home/Home"
import Wishes from "./router/wishes/Wishes"
import Cart from "./router/cart/Cart"
import { Routes, Route } from 'react-router-dom';
import NavbarBottom from './components/navbar-bottom/NavbarBottom';
import Login from './router/login/Login';

function App() {
  return (
    <div className="App">
      <SubHeader/>
      <Navbar/>
      <NavbarBottom/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/wishes' element={<Wishes/>}/>
        <Route path='/cart' element={<Cart/>}/>
      </Routes>
    </div>
  );
}

export default App;
