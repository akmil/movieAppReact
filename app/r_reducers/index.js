import { combineReducers } from 'redux';
import movies from './movies';
import moviesMetaData from './moveMetaData';
import visibilityFilter, {fetching} from './visibilityFilter';

export default combineReducers({
    movies,
    moviesMetaData,
    visibilityFilter,
    fetching
})