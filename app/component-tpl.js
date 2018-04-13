import React from 'react';
var createReactClass = require('create-react-class');
//to use React.createClass: npm install create-react-class --save

let rBool = Math.random() >= 0.5;

const FirstComponent0 = createReactClass({
    render: function() {
        return (
            <React.Fragment>
                <div>
                    --createReactClass--
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
        some --simple--, element!        <span>It is {new Date().toLocaleTimeString()}.</span>
    </h1>
);

const secondelement = React.createElement(
    'h2',
    {className: 'greeting2'},
    rBool ? 'Hi, second --simple-- element!' : 'Hey second element! --React.createElement--'
);

class PureComponent extends React.PureComponent {
    render() {
        return (
            <div>
                <b>React.PureComponent</b>
                <p>
                    Furthermore, React.PureComponent’s shouldComponentUpdate() skips prop updates for the whole component subtree. Make sure all the children components are also “pure”
                </p>
                {new Date().toLocaleTimeString()}
            </div>
        )
    }
}

class FirstComponent extends React.Component {
    constructor(){
        super();
        this.forceUpdateHandler = this.onClickButtonFnComponent.bind(this);
    };

    onClickButtonFnComponent(){
        rBool = Math.random() >= 0.5;
        console.log(rBool);
        this.forceUpdate();
    };

    render() {
        return (
            <div>
                ***--React.Component-- simple text
                {elementMain}
                {(rBool) ? secondelement : secondelement /*???*/}
                <FirstComponent0></FirstComponent0>
                <PureComponent></PureComponent>
                <HelloFnComponent name='real Name goes here. --HelloFnComponent--'></HelloFnComponent>
                <ButtonFnComponent onClick={this.forceUpdateHandler}>Button styling --Fn Component--</ButtonFnComponent>
            </div>
        )
    }
}

export default FirstComponent;