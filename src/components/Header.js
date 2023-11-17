import React from 'react';
import { Link } from 'react-router-dom';
import Parallax from './Parallax';

const Header = () => {
  return (
    <>
    <header>
        <h2 className="logo">LOGO</h2>
        <nav className="navigation">
          <Link to="/home" className="active">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/service">Service</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/login">Login</Link>
          <Link to='/signup'>Sign up</Link>
        </nav>
      </header> 
      
    </>
  )
}

export default Header