import { combineReducers } from 'redux';
import movies from './movies';
import movieDetails from './movieDetails';
import relatedMovies from './relatedMovies';
import moviesMetaData from './moveMetaData';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    movies,
    moviesMetaData,
    visibilityFilter,
    relatedMovies,
    movieDetails
})