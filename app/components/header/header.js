import React from 'react';
import SearchBox from "./searchBox";
import ResultsBox from "./ResultsBox";
// import ErrorBoundry from 'common/errorBoundry';


//functional components great for styling (particularly on smaller projects)
const ButtonFnComponent = props => {
    const styles = {
        background: 'blue',
        color: 'white',
        padding: '10px'
    };

    return <button {...props} style={styles} />;
};

const SearchField = ({name}) => (
    <input placeholder={`Hi ${name}`} />
);
const SearchFilter  = ({name}) => (
    <ul>
        <li>Title</li>
        <li>Genre</li>
    </ul>
);
const SearchButton  = ({name}) => (
    <ul>
        <li>Title</li>
        <li>Genre</li>
    </ul>
);


class Header extends React.Component {
    constructor(){
        super();
        this.state = {rBool : Math.random() >= 0.5};
        this.forceUpdateHandler = this.onClickButtonFnComponent.bind(this);
    };

    onClickButtonFnComponent(){
        // this.setState(function (state, props) {
        //     return {
        //         rBool: Math.random() >= 0.5
        //     }
        // });
        this.setState({
            rBool: Math.random() >= 0.5
        });
        console.log(this.state.rBool);
        this.forceUpdate();
    };

    render() {
        if (this.state.counter === 5) {
            // Simulate a JS error
            throw new Error('I crashed!');
        }

        return (
            <header>
                <SearchBox></SearchBox>
                <ResultsBox></ResultsBox>
            </header>
        )
    }
}

export default Header;