import React, { Component } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import './style.css';

class SliderItem extends Component {
  render() {
    return (
      <div className='slider-grid'>
        <div className='slider-item-content'>
          <h4 className='slider-item-category'>PropsCat</h4>
          <h1 className='slider-item-title'>Props Title</h1>
          <button className='component-button'>Check It Out
            <FontAwesomeIcon className="button-arrow" icon="long-arrow-alt-right" />
          </button>
          <p className='slider-item-number'>N0</p>
        </div>
        <div className='slider-nav-bottom'>
          <div className='slider-nav-prev'>Previous</div>
          <div className='slider-nav-next'>Next</div>
        </div>
      </div>
    );
  }
}

export default SliderItem;
