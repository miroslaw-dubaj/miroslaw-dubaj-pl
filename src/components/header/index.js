import React, { Component } from 'react';
import NavBar from '../../modules/nav-bar';
import Logo from '../logo';
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <Logo className='logo' />
        <NavBar className='nav-bar' />
      </div>
    );
  }
}

export default Header;
