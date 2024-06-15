import React from 'react';
import Logo from './Images/Logo.png'
import './Navbar.css'; // Make sure to create a CSS file for styling

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={Logo} alt="Logo" />
      </div>
      <div className='links'>
      <ul className="navbar-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#blog">Gallery</a></li>
        <li><a href="#blog">Plans</a></li>
      </ul>
      </div>
      <div className="navbar-search">
        <input type="text" placeholder="Search" />
      </div>
      <button className="contact-button">Contact Us</button>
    </nav>
  );
}

export default Navbar;
