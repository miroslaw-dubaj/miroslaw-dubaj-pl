import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import styles from '../slider-item/style.css';

const SliderNavButton = ({text, arrow}) => {
  return (
    <div className={styles.slider_nav_button}>
      {arrow === 'left' && <FontAwesomeIcon className="button-arrow" icon="long-arrow-alt-left" />}
      <span>{text}</span>
      {arrow === 'right' && <FontAwesomeIcon className="button-arrow" icon="long-arrow-alt-right" />}
    </div>
  );
};

export default SliderNavButton;
