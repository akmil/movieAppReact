import React from 'react';
import Header from '../app/components/header/header';
import ResultsBox from "../app/components/resultsBox/resultsBox";

class Search extends React.Component {
    static getInitialProps = (ctx) => {
        const { query } = ctx;
        const pathToSearch = `${query.search}&searchBy=${query.searchBy}`;
        const userAgent = ctx.req ? ctx.req.headers['user-agent'] : 'someBrowser';

        console.log('ctx', ctx.asPath);
        console.log('query', query);
        // console.log('ctx-headers', ctx.req.headers['user-agent']);
        return {
            query,
            pathToSearch,
            userAgent
        }
    };

    componentDidMount(){
        console.log('Search query', this.props.query);
        console.log('Search userAgent', this.props.userAgent);
    }

    render() {
        return (
            <div className={`main-layout-wrapper`}>
                <Header query={this.props.pathToSearch} userAgent={this.props.userAgent}></Header>
                <ResultsBox></ResultsBox>
            </div>
        )
    }
}

export default Search;
