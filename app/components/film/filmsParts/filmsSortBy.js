import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter, showAll, suggestMovies } from '../../../r_actions';
import * as bookActions from '../../../r_actions';
import FilmsSearchButton from './filmsSearchButton';

const getVisibleMovie = (movies, filter) => {
    console.log('**filmsSortBy.getVisibleMovie', filter);
    switch (filter) {
        case 'SHOW_DRAMA':
            console.log('==== filmsSortBy.getVisibleMovie ===',filter, movies.filter(t => t.genre === 'Drama2'));
            return movies.filter(t => t.genre === 'Drama2');
        case 'SHOW_COMEDY':
            return movies.filter(t => t.genre === 'Comedy');
        case 'SHOW_ACTIVE':
            return movies.filter(t => !t.genre);
        case 'SHOW_ALL':
        default:
            return movies
    }
}

const mapStateToProps = state => {
    return {
        movies: getVisibleMovie(state.movies, state.visibilityFilter)
    }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    /*onClick: () => {
        console.log('onClick dispatch', setVisibilityFilter(ownProps.filter));
        dispatch(setVisibilityFilter(ownProps.filter))
    },*/
    /*onClick: () => {
        // console.log('onClick dispatch',suggestResortName('movies'));
        dispatch(suggestMovies('movies', dispatch))
    }*/
    onClick: () => {dispatch(suggestMovies('movies'))},
    fetchBooksId : bookId => dispatch(bookActions.fetchBookById(bookId)),
})


// const mapStateToProps = (state, ownProps) => ({
//     active: ownProps.filter === state.visibilityFilter
// })

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     onClick: () => {
//         console.log('onClick dispatch', setVisibilityFilter(ownProps.filter));
//         dispatch(setVisibilityFilter(ownProps.filter))
//     }
// })


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FilmsSearchButton)

