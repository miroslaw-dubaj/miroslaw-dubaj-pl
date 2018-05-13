import React from 'react';
import ReactDOM from 'react-dom';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import faHome from '@fortawesome/fontawesome-free-solid/faHome';
import faUserTie from '@fortawesome/fontawesome-free-solid/faUserTie';
import faCode from '@fortawesome/fontawesome-free-solid/faCode';
import faRss from '@fortawesome/fontawesome-free-solid/faRss';
import faPhone from '@fortawesome/fontawesome-free-solid/faPhone';
import faAt from '@fortawesome/fontawesome-free-solid/faAt';
import faLongArrowAltRight from '@fortawesome/fontawesome-free-solid/faLongArrowAltRight';
import faLongArrowAltLeft from '@fortawesome/fontawesome-free-solid/faLongArrowAltLeft';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

fontawesome.library.add(
  brands, 
  faHome, 
  faUserTie, 
  faCode, 
  faRss, 
  faPhone, 
  faAt,
  faLongArrowAltRight,
  faLongArrowAltLeft
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
