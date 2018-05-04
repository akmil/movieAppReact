import React from 'react';
import {SearchField, SearchFilter, SearchButton} from "./searchBox";

import ErrorBoundry from '../common/errorBoundry';

class Header1 extends React.Component {

    render() {
        return (
            <header>
                <div className={'logo'}>netfixroulette</div>
                <ErrorBoundry>
                    <SearchField
                        val={'Search by name'}/>
                </ErrorBoundry>
                <div className={'search-filter'}>
                    <ErrorBoundry>
                        <SearchFilter/>
                    </ErrorBoundry>
                    <ErrorBoundry>
                        <SearchButton/>
                    </ErrorBoundry>
                </div>
            </header>
        )
    }
}

export default Header1;