import { combineReducers } from 'redux';
import movies from './movies';
import movieDetails from './movieDetails';
import moviesMetaData from './moveMetaData';
import visibilityFilter from './visibilityFilter';

export default combineReducers({
    movies,
    moviesMetaData,
    visibilityFilter,
    movieDetails
})