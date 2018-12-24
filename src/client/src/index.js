import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';

import { USER_RECEIVED } from './redux/events';
fetch('/user')
  .then(res => res.json())
  .then(user => store.dispatch({ type: USER_RECEIVED, data: user }));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'));
