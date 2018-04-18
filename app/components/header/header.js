import React from 'react';
import SearchBox from "./searchBox";
import ResultsBox from "./resultsBox";
// import ErrorBoundry from 'common/errorBoundry';

class Header extends React.Component {
    constructor(){
        super();
    };

    render() {
        return (
            <header>
                <SearchBox></SearchBox>
                <ResultsBox></ResultsBox>
            </header>
        )
    }
}

export default Header;