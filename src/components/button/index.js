import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './style.css'

const Button = ({text, icon}) => {
  return (

    <button className='component-button'>
      {icon === 'left' && <FontAwesomeIcon className="button-arrow" icon="long-arrow-alt-left" /> }
      {text}
      {icon === 'right' && <FontAwesomeIcon className="button-arrow" icon="long-arrow-alt-right" /> }
    </button>
  );
};

export default Button;
