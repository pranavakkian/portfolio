/* istanbul ignore file */
/* eslint-disable no-undef */
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'semantic-ui-css/semantic.min.css';
import App from './Container/App/App';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-124182431-4');
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<StrictMode><App /></StrictMode>, document.getElementById('root'));

serviceWorker.register({
  onUpdate: (registration) => {
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    window.location.reload();
  },
});
