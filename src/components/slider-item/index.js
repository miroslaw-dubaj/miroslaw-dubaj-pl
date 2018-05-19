import React, { PureComponent } from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import SliderNavButton from '../slider-nav-button';
import Button from '../button';
import styles from './style.css';

class SliderItem extends PureComponent {
  render() {
    return (
      <div className={styles.slider_grid}>
        <div className={styles.slider_item_content}>
          <h4 className={styles.slider_item_category}>{this.props.slide.cat}</h4>
          <h1 className={styles.slider_item_title}>{this.props.slide.title}</h1>
          <Button text='check it out' icon='right' />
          <p className={styles.slider_item_number}>{this.props.slide.id}</p>
        </div>
        <div className={styles.slider_nav_bottom}>
          <SliderNavButton text='Previous Project' arrow='left' />
          <SliderNavButton text='Next Project' arrow='right' />
        </div>
      </div>
    );
  }
}

export default SliderItem;
