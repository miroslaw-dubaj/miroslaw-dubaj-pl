import React from 'react';
import SocialLinks from '../social-links';
import logo from '../../images/logo-1.png';
import styles from './style.css';

const Logo = () => {
  return (
    <div className={styles.logo}>
      <a href='#' className={styles.logo_link}>
        <img src={logo} className='logo-img' />
      </a>
      <SocialLinks />
    </div>
  );
};

export default Logo;
