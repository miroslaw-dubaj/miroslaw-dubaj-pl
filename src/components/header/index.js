import React, { Component } from 'react';
import NavItem from '../nav-item'
import './style.css';

class Header extends Component {
  render() {
    return (
      <div className='header'>
        <NavItem title='About'/>
        <NavItem title='Services'/>
        <NavItem title='Gallery'/>
        <NavItem title='Blog'/>
        <NavItem title='Contact'/>
      </div>
    );
  }
}

export default Header;
