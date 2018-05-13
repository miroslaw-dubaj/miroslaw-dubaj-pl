import React, { Component } from 'react';
import SocialLinks from '../../modules/social-links';
import logo from '../../logo-1.png';
import './style.css';

class Logo extends Component {
  render() {
    return (
      <div className='logo'>
        <a href='#' className='logo-link'>
          <img src={logo} className='logo-img' />
        </a>
        <SocialLinks />
      </div>
    );
  }
}

export default Logo;
