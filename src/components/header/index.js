import React, { PureComponent } from 'react';
import NavBar from '../nav-bar';
import Logo from '../logo';
import styles from './style.css';

console.log(styles.header);

class Header extends PureComponent {
  render() {
    return (
      <div className={styles.header}>
        <Logo className='logo' />
        <NavBar className='nav-bar' />
      </div>
    );
  }
}

export default Header;
