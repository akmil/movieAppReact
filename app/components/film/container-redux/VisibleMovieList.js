import { connect } from 'react-redux';
import { ResultsBody } from './../../resultsBox/resultsBody';

export const getVisibleMovie = (movies, filter) => {
  // console.log('___ =VisibleTodoList= filter -> ', filter);
  // console.log('___ =VisibleTodoList= movies -> ', movies);

  switch (filter) {
    case 'SHOW_DRAMA':
      return movies.filter(t => t.genre === 'Drama2');
    case 'SHOW_COMEDY':
      return movies.filter(t => t.genre === 'Comedy');
    case 'SHOW_ALL':
    default:
      return movies;
  }
};

export const mapStateToProps = (state) => {
  if (state.relatedMovies.length > 0) {
    console.log('state.movies.length', state.relatedMovies);
    return {
      movies: getVisibleMovie(
        state.relatedMovies,
        state.visibilityFilter,
      ),
    };
  }
  return {
    movies: getVisibleMovie(
      state.movies,
      state.visibilityFilter,
    ),
  };
};

/* const mapDispatchToProps = dispatch => {
    // console.log('___ =VisibleTodoList= onTodoClick');
    //Do nothing
    return {
      onMovieClick: filter => {
            dispatch(filter => ({
                type: 'SHOW_DRAMA-1',
                filter
            }))
        }
    }
} */

const VisibleTodoList = connect(mapStateToProps)(ResultsBody);

export default VisibleTodoList;
