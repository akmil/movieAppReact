import React from 'react'; // Required even if we're not using the `React` object
import ReactDOM from 'react-dom';
import App from './mainLayout';


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

if (module && module.hot) {
    module.hot.accept();
}