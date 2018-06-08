import React from 'react';

export const MovieItem = ({
  title, genre, releaseDate, src,
}) => (
    <li>
        <img src={src}
             alt={`${title}`}/>
        <div className={'col-50'}>
            <p className={'title'}>{title}</p>
            <p className={'genre'}>{genre}</p>
        </div>
        <div className={'col-50 text-align-right'}>
            <span className={'release-date'}>{releaseDate}</span>
        </div>
    </li>
);
