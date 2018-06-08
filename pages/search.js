import React from 'react';
import Header from '../app/components/header/header';
import ResultsBox from "../app/components/resultsBox/resultsBox";

class Search extends React.Component {
    static getInitialProps = (ctx) => {
        const { query } = ctx.query;
        console.log('ctx', ctx);
        return {
            query,
        }
    };

    componentDidMount(){
        console.log('Search props', this.props);
    }

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <Header query={this.props.query}></Header>
                <ResultsBox></ResultsBox>
            </div>
        )
    }
}

export default Search;
