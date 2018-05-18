import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SliderNavButton from '../slider-nav-button';
import Button from '../button';
import './style.css';

class SliderItem extends PureComponent {
  render() {
    return (
      <div className='slider-grid'>
        <div className='slider-item-content'>
          <h4 className='slider-item-category'>{this.props.slide.cat}</h4>
          <h1 className='slider-item-title'>{this.props.slide.title}</h1>
          <Button text='check it out' icon='right' />
          <p className='slider-item-number'>{this.props.slide.id}</p>
        </div>
        <div className='slider-nav-bottom'>
          <SliderNavButton text='Previous Project' arrow='left' />
          <SliderNavButton text='Next Project' arrow='right' />
        </div>
      </div>
    );
  }
}

export default SliderItem;
