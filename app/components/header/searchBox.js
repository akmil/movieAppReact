import React from 'react';
import {Button} from '../common/button';

export const SearchField = ({val}) => {
    return (
        <div className={'search-field-box'}>
            <label className={'search-field-label'}>Find your movie</label>
            <input placeholder={`Hey, ${val}`} className={'search-field-input'}/>
        </div>
    );
};

const SearchButton  = () => {
    return <div className={'search-button'}>
        <Button>search</Button>
    </div>
};


export const SearchFilter  = ({name}) => {
    return (
        <div className={'search-filter'}>
            <div className={'search-filter-box'}>
                Search by
                <ul className={'search-filter-list'}>
                    <li>{`Title ${name}`}</li>
                    <li>{`Genre ${name}`}</li>
                </ul>
            </div>
            <SearchButton/>
        </div>
    );
};
