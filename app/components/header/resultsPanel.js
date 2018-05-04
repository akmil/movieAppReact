import React from 'react';

export const ResultsCount = ({count}) => (
    <div className='results-count'>{count} items found</div>
);

export const ResultsSort = ({activeItem}) => (
    <div className={'results-sort-by'}>
        Sort by
        <ul className={'results-sort-by-list'}>
            <li>{`release date`}</li>
            <li className={`active`}>{`raiting`}</li> {/*TODO get from activeItem*/}
        </ul>
    </div>
);