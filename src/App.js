import React, { PureComponent } from 'react';
import Header from './components/header';
import Slider from './components/slider';
import PageHead from './components/page-head';
import './App.css';

const PAGES = {
  HOME: 'Homepage'
}

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activePage: PAGES.HOME,
      // slides fetched from db - needs implementation
      slides: [
        {
        cat: 'Project',
        title: 'React Portfolio',
        id: '01',
        backgroudUrl: '../../images/alejandro-escamilla-1-unsplash.jpg'
        },
        {
          cat: 'Project',
          title: 'TacticalTube',
          id: '02',
          backgroudUrl: '../../images/alejandro-escamilla-1-unsplash.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div className='grid'>
        <Header />
        {this.state.activePage === PAGES.HOME && <Slider slides={this.state.slides}/>}
      </div>
    );
  }
}

export default App;
