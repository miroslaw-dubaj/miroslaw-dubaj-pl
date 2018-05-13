import React, { Component } from 'react';
import Header from './components/header';
import Slider from './modules/slider';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='grid'>
        <Header />
        <Slider />
      </div>
    );
  }
}

export default App;
