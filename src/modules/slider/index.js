import React, { Component } from 'react';
import SliderItem from '../slider-item'
import SliderNote from '../slider-note';
import './style.css';

class Slider extends Component {
  render() {
    return (
      <div className='slider'>
        <SliderItem className='slider-item' />
        <SliderNote className='slider-note' />
      </div>
    );
  }
}

export default Slider;
