import React, { PureComponent } from 'react';
import './style.css';

class NavItem extends PureComponent {
  render() {
    return (
      <div onClick={this.props.onNavClick()} className='nav-item'>
        <a href='/' className='nav-item-link'>
          <span className='nav-item-title'>{this.props.title}{this.props.children}</span>
        </a>
      </div>
    );
  }
}

export default NavItem;