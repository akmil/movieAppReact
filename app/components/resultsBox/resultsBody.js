import React from 'react';
import { ResultsBodyItem } from './resultsBodyItem';

export const ResultsBody = ({ movies = [], onMovieClick }) => (
        <div className='results-list-box'>
            { movies.length === 0 && <h2 className='text-center'>No films found</h2> }
            <ul className='results-list'>
                {movies.map((movie, index) => (
                    <ResultsBodyItem key={index} {...movie} onClick={() => onMovieClick(index)}/>
                ))}
            </ul>
        </div>
);
