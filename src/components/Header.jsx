import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className='container'>
      <div className='d-flex align-items-center'>
        <div className='logo me-auto'>
          <Link to="">
            <h1 className='m-0'>CIs</h1>
          </Link>
        </div>
        <nav className='menu-link'>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/faq">FAQ</Link>
        </nav>
      </div>
      </div>
    </header>
  );
};

export default Header;