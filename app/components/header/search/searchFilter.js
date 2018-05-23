import React from 'react';

export const SearchFilter = ({name}) => {
    return (
        <div className='search-filter-box'>
            Search by
            <ul className={'search-filter-list'}>
                <li>{`Title ${name}`}</li>
                <li>{`Genre ${name}`}</li>
            </ul>
        </div>
    );
};
