import React from 'react';
import { Link } from "react-router-dom";

import Logo from "../assets/images/logo.svg";


const Header = () => {
  return (
    <header className='header'>
      <div className="container w-full mx-auto px-3
                sm:max-w-[540px]
                md:max-w-[720px]
                lg:max-w-[960px]
                xl:max-w-[1140px]
                2xl:max-w-[1440px]"
      >
        <div className='flex items-center'>
          <div className='logo me-auto'>
            <Link to="">
              <img src={Logo} alt="logo" />
            </Link>
          </div>
          <nav className='menu-link'>
            <Link to="/" className='flex font'>Home</Link>
            <Link to="/about" className='flex align-items-center gap-2 link-underline link-offset-1 '>About</Link>
            <Link to="/services" className=''>Services</Link>
            <Link to="/contact" className=''>Contact</Link>
            <Link to="/faq" className=''>FAQ</Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;