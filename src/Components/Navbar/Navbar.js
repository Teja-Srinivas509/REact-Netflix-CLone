import React, { useRef } from 'react';
import './Navbar.css'
import logo from '../../assets/logo - Copy.png'

function Navbar() {
  return (
    <nav>
      <img src={logo} alt="logo" className="logo" />
      <div className="buttonbtn">
        <select className="btn-lan">
          <option>English</option>
          <option>Português</option>
          <option>Hindi</option>
        </select>
        <button className="btn-signin"><a href="./login.html">SignIn</a></button>
      </div>
    </nav>
  );
}

export default Navbar;
