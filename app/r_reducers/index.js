import { combineReducers } from 'redux';
import movies from './movies';
import visibilityFilter, {fetching} from './visibilityFilter';

export default combineReducers({
    movies,
    visibilityFilter,
    fetching
})