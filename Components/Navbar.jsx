import React, { useState } from 'react';
import { assets } from '../assets/images/assets';
import './Navbar.css';

const Navbar = () => {

  const [Food, setFood] = useState("Home")

  return (
    <div className='navbar'>
      <img src={assets.logo}  alt='logo' className='logo'/>
      <ul className='navbar-menu'>
        <a href='/' onClick={() => setFood("Home")} className={Food === "Home" ? "active" : ""}>Home</a>
        <a href='#explore-f' onClick={() => setFood("Food")} className={Food === "Food" ? "active" : ""}>Food</a>
        <a href='/' onClick={() => setFood("Cart")} className={Food === "Cart" ? "active" : ""}>Cart</a>
        <a href='/' onClick={() => setFood("Contact")} className={Food === "Contact" ? "active" : ""}>Contact</a>
      </ul>
      <div className='navbar-right'>
        <img src='/src/assets/images/search_icon.png' alt='search' />
        

        <button>sign in</button>

      </div>

    </div>
  );

}

export default Navbar