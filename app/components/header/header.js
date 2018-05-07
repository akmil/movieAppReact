import React from 'react';
import {SearchField, SearchFilter, SearchButton} from "./searchBox";
import {ResultsCount, ResultsSort} from "./resultsPanel";

class Header1 extends React.Component {

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div className={'logo'}>netfixroulette</div>
                        <SearchField
                            val={'Search by name'}/>
                    <div className={'search-filter'}>
                        <SearchFilter/>
                        <SearchButton/>
                    </div>
                </div>
                <div className='results results-wrapper'>
                    <ResultsCount count={7}></ResultsCount>
                    <ResultsSort activeItem={1}></ResultsSort>
                </div>
            </header>
        )
    }
}

export default Header1;