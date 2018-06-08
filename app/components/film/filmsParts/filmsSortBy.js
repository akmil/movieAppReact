import React from 'react';
import { connect } from 'react-redux';
import { suggestMovies } from '../../../r_actions';
import FilmsSearchButton from './filmsSearchButton';

export const getVisibleMovie = (movies, filter) => {
  // console.log('**filmsSortBy.getVisibleMovie', filter);
  switch (filter) {
    case 'SHOW_DRAMA':
      // console.log('==== filmsSortBy.getVisibleMovie ===',filter, movies.filter(t => t.genre === 'Drama2'));
      return movies.filter(t => t.genre === 'Drama2');
    case 'SHOW_COMEDY':
      return movies.filter(t => t.genre === 'Comedy');
    case 'SHOW_ACTIVE':
      return movies.filter(t => !t.genre);
    case 'SHOW_ALL':
    default:
      return movies;
  }
};

export const mapStateToProps = state => ({
  movies: getVisibleMovie(state.movies, state.visibilityFilter),
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => dispatch(suggestMovies('movies')),
  // fetchBooksId : bookId => dispatch(bookActions.fetchBookById(bookId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilmsSearchButton);

