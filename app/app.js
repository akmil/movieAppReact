// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
// import routes from './routes';
import * as movieActions from './r_actions/index';
import App from './mainLayout';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import ResultsBox from "./components/resultsBox/resultsBox";
import FilmsBox from "./components/film/filmsBox";

import configureStore from './r_store/configureStore.dev';

const store = configureStore();
store.dispatch(movieActions.suggestMovies('movies'));

render(
    <Router>
      <Provider store={store}>
          <App>
              <Route path="/posts" component={ResultsBox} />
              <Route path="/about" component={FilmsBox} />
          </App>
      </Provider>
    </Router>,
  document.getElementById('app')
);