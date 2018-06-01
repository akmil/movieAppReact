import React from 'react';
import Header from '../app/components/header/header';
import ResultsBox from "../app/components/resultsBox/resultsBox";

class Search extends React.Component {

    componentDidMount(){
        // console.log('Search match.params', this.props.match.params);
    }

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <Header query={this.props.match.params.query}></Header>
                <ResultsBox></ResultsBox>
            </div>
        )
    }
}

export default Search;