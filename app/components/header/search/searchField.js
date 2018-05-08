import React from 'react';

export const SearchField = ({val}) => {
    return (
        <div className={'search-field-box'}>
            <label className={'search-field-label'}>Find your movie</label>
            <input placeholder={`Hey, ${val}`} className={'search-field-input'}/>
        </div>
    );
};

