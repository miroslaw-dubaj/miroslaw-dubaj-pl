import React, { Component } from 'react';
import NavItem from '../../components/nav-item'
import './style.css';

class NavBar extends Component {
  render() {
    return (
      <div className='nav-menu'>
        <NavItem title='About' />
        <NavItem title='Skills' />
        <NavItem title='Portfolio' />
        <NavItem title='Blog' />
        <NavItem title='Contact' />
      </div>
    );
  }
}

export default NavBar;
