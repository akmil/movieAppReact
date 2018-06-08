// import 'babel-polyfill';
import React from 'react';
import { Provider } from 'react-redux';
// import { render } from 'react-dom';
import { StaticRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

// import routes from './routes';
// import * as movieActions from './r_actions/index';
import HomeLayout from './homeLayout';
import Search from './search';
import PagesList from './pagesList';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import FilmsBox from './components/film/filmsBox';
import { About } from './components/About';
import { FourOhFour } from './components/FourOhFour';

import configureStore from './r_store/configureStore.dev';

const store = configureStore();

const context = {};
const markup = ReactDOMServer.renderToString(
    <Router location={req.url}
            context={context}>
      <Provider store={store}>
          <PagesList>
              {/* <Route exact path="/" component={PagesList} /> */}
              <Switch>
                  <Route path="/home" component={HomeLayout} />
                  <Route path="/search/:query" component={Search} />
                  <Route path="/details/:id" component={FilmsBox} />
                  <Route path="/about/:tab/:section" component={About} />
                  <Redirect exact from="/workers" to="/about/company/employees" />
                  <Route path="*" component={FourOhFour}/>
              </Switch>
          </PagesList>
      </Provider>
    </Router>,
    document.getElementById('app'),
);

if (context.url) {
  // Somewhere a `<Redirect>` was rendered
  redirect(301, context.url);
} else {
  // we're good, send the response
}
