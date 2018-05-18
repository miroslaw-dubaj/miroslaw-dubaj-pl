import React, { PureComponent } from 'react';
import background from '../../images/alejandro-escamilla-1-unsplash.jpg';

class PageHead extends PureComponent {
  constructor(props) {
    super(props)
  };

  render() {
    const bgUrl = `no-repeat url(\'${background} \')`;
    return (
      <div className='slider' style={{ background: bgUrl, backgroundSize: 'cover' }}>
        PAGE HEAD
      </div>
    );
  }
}

export default PageHead;
