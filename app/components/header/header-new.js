import React from 'react';
import {SearchField, SearchFilter} from "./searchBox";

// import ErrorBoundry from 'common/errorBoundry';

class Header2 extends React.Component {

    render() {
        return (
            <header>
                <div className={'logo'}>netfixroulette</div>
                <SearchField
                    val={'Search by name'}/>
                <SearchFilter></SearchFilter>
            </header>
        )
    }
}

export default Header2;