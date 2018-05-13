import React, { Component } from 'react';
import './style.css';

class SliderNote extends Component {

  // this.props.text.split('\n').map((item, key) => {
  //   return <span key={key}>{item}<br /></span>
  // })

  render() {
    return (
      <div className='slider-note-container'>
        <h2 className='slider-note-title'>Miroslaw Dubaj</h2>
        <h4 className='slider-note-subtitle'>JavaScript Developer</h4>
        <p className='slider-note-paragraph'>Hi, Thanks for stopping by. I am a JavaScript Developer, based in Rzeszów, Poland.</p>
      </div>
    );
  }
}

export default SliderNote;
