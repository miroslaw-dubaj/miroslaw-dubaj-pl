import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import styles from './style.css';

const SocialLinks = () => {
  return (
    <div className={styles.social_menu}>
      <a href='#' className={styles.social_menu_link}>
        <FontAwesomeIcon className={styles.social_menu_item} icon={["fab", "facebook"]} />
      </a>
      <a href='#' className={styles.social_menu_link}>
        <FontAwesomeIcon className={styles.social_menu_item} icon={["fab", "linkedin"]} />
      </a>
      <a href='#' className={styles.social_menu_link}>
        <FontAwesomeIcon className={styles.social_menu_item} icon={["fab", "github"]} />
      </a>
      <a href='#' className={styles.social_menu_link}>
        <FontAwesomeIcon className={styles.social_menu_item} icon="at" />
      </a>
    </div>
  );
};

export default SocialLinks;