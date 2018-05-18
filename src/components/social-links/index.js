import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import './style.css';

const SocialLinks = () => {
  return (
    <div className='social-menu'>
      <a href='#' className='social-menu-link'>
        <FontAwesomeIcon className="social-menu-item" icon={["fab", "facebook"]} />
      </a>
      <a href='#' className='social-menu-link'>
        <FontAwesomeIcon className="social-menu-item" icon={["fab", "linkedin"]} />
      </a>
      <a href='#' className='social-menu-link'>
        <FontAwesomeIcon className="social-menu-item" icon={["fab", "github"]} />
      </a>
      <a href='#' className='social-menu-link'>
        <FontAwesomeIcon className="social-menu-item" icon="at" />
      </a>
    </div>
  );
};

export default SocialLinks;