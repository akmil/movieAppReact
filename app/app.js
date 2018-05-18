import React from 'react'; // Required even if we're not using the `React` object
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './r_reducers';
import App from './mainLayout';

// import { fetchPosts } from './r_actions'

const store = createStore(
    rootReducer,
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);


/*store.dispatch(fetchPosts('reactjs'))
    .then(() => console.log(store.getState()))*/

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);

if (module && module.hot) {
    module.hot.accept();
}