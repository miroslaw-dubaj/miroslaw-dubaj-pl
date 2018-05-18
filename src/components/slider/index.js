import React, { PureComponent } from 'react';
import SliderItem from '../slider-item'
import SliderNote from '../slider-note';
import background from '../../images/alejandro-escamilla-1-unsplash.jpg';
import './style.css';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.slides,
      activeSlide: null
    };
  }
  
  render() {
    if (this.state.activeSlide) {const bg = this.state.activeSlide.backgroudUrl;}
    this.setState({ ...this.state, activeSlide: this.props.slides[0]})
    const bgUrl = `no-repeat url(\'${background} \')`;
    return (
      <div className='slider' style={{ background: bgUrl, backgroundSize: 'cover'}}>
        {this.state.activeSlide && <SliderItem slide={this.state.activeSlide} className='slider-item' />}
        <SliderNote className='slider-note' />
      </div>
    );
  }
}



export default Slider;
