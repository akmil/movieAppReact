import React from 'react';

export const FilmsTitle = ({title, rate}) => (
    <h1 className='films-title mb-0'>
        {title}
        <span className={'badge badge-transparent ml-2'}>{rate}</span>
    </h1>
);