import React from 'react';

export const SearchField = ({ onChange }) => (
        <div className={'search-field-box'}>
            <label className={'search-field-label'}>Find your movie</label>
            <input
              placeholder={'Hey'}
              className={'search-field-input'}
              onChange={onChange}
            />
        </div>
);

