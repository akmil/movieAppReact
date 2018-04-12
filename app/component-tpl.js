import React from 'react';
var createReactClass = require('create-react-class');
//to use React.createClass: npm install create-react-class --save

const FirstComponent0 = createReactClass({
    render: function() {
        return (
            <React.Fragment>
                <div>
                    <p>Hello big Fragment</p>
                </div>
            </React.Fragment>
        )
    }
});

//functional components are not bound to React
//But the syntax of FSCs encourages stateless components
const HelloFnComponent = ({name}) => (
    <div>
        {`Hi ${name}`}
    </div>
);

//functional components great for styling (particularly on smaller projects)
const ButtonFnComponent = props => {
    const styles = {
        background: 'blue',
        color: 'white',
        padding: '10px'
    };

    return <button {...props} style={styles} />;
};

const elementMain = (
    <h1 className="greeting">
        some, element!        <span>It is {new Date().toLocaleTimeString()}.</span>
    </h1>
);

const secondelement = React.createElement(
    'h1',
    {className: 'greeting'},
    Math.random() >= 0.5 ? 'Hi, second element!' : 'Hey second element!'
);

class PureComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <p>
                    Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”
                </p>
                {new Date().toLocaleTimeString()}
            </div>
        )
    }
}

class FirstComponent extends React.Component {
    render() {
        return (
            <div>
                {elementMain}
                <FirstComponent0></FirstComponent0>
                {secondelement}
                ***simple text
                <PureComponent></PureComponent>
                <HelloFnComponent name='real Name goes here'></HelloFnComponent>
                <ButtonFnComponent>Button styling Fn Component</ButtonFnComponent>
            </div>
        )
    }
}

export default FirstComponent;