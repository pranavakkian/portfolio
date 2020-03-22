/* eslint-disable no-undef */
import React from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import 'semantic-ui-css/semantic.min.css';
// eslint-disable-next-line import/extensions
import App from './Container/App.jsx';
import './index.css';
import * as serviceWorker from './serviceWorker';

ReactGA.initialize('UA-124182431-4');
ReactGA.pageview(window.location.pathname + window.location.search);

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
