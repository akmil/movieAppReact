// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// import routes from './routes';
import * as bookActions from './r_actions/fetchBookAction';
import * as movieActions from './r_actions/index';
import App from './mainLayout';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import configureStore from './r_store/configureStore.dev';

const store = configureStore();
store.dispatch(movieActions.suggestMovies('movies'));
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);