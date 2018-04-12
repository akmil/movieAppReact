import React from 'react'; // Required even if we're not using the `React` object
import ReactDOM from 'react-dom';
import App from './component-tpl';


ReactDOM.render(
    <App />,
    document.getElementById('app')
);

module.hot.accept();


/*
"Similar" jQuery
var FirstComponent = $('<div>Hello World</div>');
$('#root').html(App);
*/