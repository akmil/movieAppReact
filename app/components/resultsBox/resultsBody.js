import React from 'react';
import {ResultsBodyItem} from './resultsBodyItem';

export const ResultsBody = ({ movies = [], onMovieClick }) => {
    return (
        <div className='results-list-box'>
            <ul className='results-list'>
                {movies.map((movie, index) => (
                    <ResultsBodyItem key={index} {...movie} onClick={() => onMovieClick(index)} />
                ))}
            </ul>
        </div>
    )
};