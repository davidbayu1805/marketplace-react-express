import React, { useContext, useState } from 'react'
import './Navbar.css'
import {assets} from '../../assets/assets'
import {Link} from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { StoreContext } from '../../context/StoreContext';


const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");

  const {getTotalCartAmount} =useContext(StoreContext);

  return (
    <div className='navbar'>
      <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
      <ul className="navbar-menu">
        <li><Link to="/" onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>Home</Link></li>
        <li><ScrollLink to="explore-menu" smooth={true} duration={500} offset={-70} onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</ScrollLink></li>
        <li><ScrollLink to="app-download" smooth={true} duration={500} offset={-70} onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile App</ScrollLink></li>
        <li><ScrollLink to="footer" smooth={true} duration={500} offset={-70} onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</ScrollLink></li>
      </ul>
      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={() => setShowLogin(true)}>Sign In</button>
      </div>
    </div>
  );
};


export default Navbar