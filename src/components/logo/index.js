import React from 'react';
import SocialLinks from '../social-links';
import logo from '../../images/logo-1.png';
import './style.css';

const Logo = () => {
  return (
    <div className='logo'>
      <a href='#' className='logo-link'>
        <img src={logo} className='logo-img' />
      </a>
      <SocialLinks />
    </div>
  );
};

export default Logo;
