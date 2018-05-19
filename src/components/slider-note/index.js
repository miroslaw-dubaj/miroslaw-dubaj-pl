import React from 'react';
import styles from './style.css';

const SliderNote = () => {
  return (
    <div className={styles.slider_note_container}>
      <h2 className={styles.slider_note_title}>Miroslaw Dubaj</h2>
      <h4 className={styles.slider_note_subtitle}>JavaScript Developer</h4>
      <p className={styles.slider_note_paragraph}>Hi, Thanks for stopping by. I am a JavaScript Developer, based in Rzeszów, Poland.</p>
    </div>
  );
};

export default SliderNote;
