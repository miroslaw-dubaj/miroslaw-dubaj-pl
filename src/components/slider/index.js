import React, { PureComponent } from 'react';
import SliderItem from '../slider-item'
import SliderNote from '../slider-note';
import background from '../../images/alejandro-escamilla-1-unsplash.jpg';
import styles from './style.css';

class Slider extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      slides: this.props.slides,
      activeSlide: null
    };

    this.onSlideBack = this.onSlideBack.bind(this);
    this.onSlideNext = this.onSlideNext.bind(this);

  }

  onSlideBack() {
    const currentIndex = !this.state.activeSlide ? 0 : this.state.slides.map(slide => slide.title).indexOf(this.state.activeSlide.title);
    const moveToIndex = currentIndex != 0 ? currentIndex - 1 : 0;
    this.setState({ ...this.state, activeSlide: this.props.slides[moveToIndex]})
  }

  onSlideNext() {
    const currentIndex = !this.state.activeSlide ? 0 : this.state.slides.map(slide => slide.title).indexOf(this.state.activeSlide.title);
    const moveToIndex = currentIndex <= this.state.slides['length'] ? currentIndex + 1 : currentIndex;
    this.setState({ ...this.state, activeSlide: this.props.slides[moveToIndex]})
  }

  render() {
    if (this.state.activeSlide) {const bg = this.state.activeSlide.backgroudUrl;}
    const bgUrl = `no-repeat url('${background}')`;
    return (
      <div className={styles.slider} style={{ background: bgUrl, backgroundSize: 'cover'}}>
        {this.state.activeSlide && <SliderItem slide={this.state.activeSlide} back={this.onSlideBack} next={this.onSlideNext}/>}
        {!this.state.activeSlide && <SliderItem slide={this.props.slides[0]} back={this.onSlideBack} next={this.onSlideNext}/>}
        <SliderNote />
      </div>
    );
  }
}



export default Slider;
