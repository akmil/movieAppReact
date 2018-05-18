import React from 'react';
import PropTypes from 'prop-types'

export const ResultsBodyItem = ({title, genre, releaseDate, src}) => (
    <li>
        <img src={src}
             alt={title}/>
        <div className="col-50">
            <p className={'title'}>{title}</p>
            <p className={'genre'}>{genre}</p>
        </div>
        <div className={'col-50 text-align-right'}>
            <span className={'release-date'}>{releaseDate}</span>
        </div>

    </li>
);

ResultsBodyItem.propTypes = {
    // onClick: PropTypes.func.isRequired,
    // isActive: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    releaseDate: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired
}


export const ResultsBody = ({ movies = [], onMovieClick }) => {
    console.log('ResultsBody', movies);

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

export default class ResultsBox extends React.Component {
    render() {
        return (
            <React.Fragment>
                <ResultsBody movies={this.props.movies}></ResultsBody>
            </React.Fragment>
        )
    }
}