import React, { PureComponent } from 'react';
import NavBar from '../nav-bar';
import Logo from '../logo';
import './style.css';

class Header extends PureComponent {
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
