import React, { Component } from 'react';
import './style.css';

class NavItem extends Component {
  render() {
    return (
      <div className='nav-item'>
        <a href='#' className='nav-item-link'>
          <span className='nav-item-title'>{this.props.title}</span>
        </a>
      </div>
    );
  }
}

export default NavItem;