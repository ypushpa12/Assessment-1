import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


import '../src/Style/Header.scss';

import { Provider } from 'react-redux';
import store from './component/services/store';
import router from './component/services/route';
ReactDOM.render(
  <Provider store={store}>{router}</Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

