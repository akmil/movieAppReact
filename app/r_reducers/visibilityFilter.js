import { VisibilityFilters } from '../r_actions';
import movies from './movies';
// import {moviesInitial} from './movies';

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
    /*console.log(
        movies.filter(t => t.genre === t.filter)
    );*/
    switch (action.type) {
        case 'SHOW_DRAMA':
            // const moviesArr = movies(moviesInitial, action.type);
            // const mFilterred = moviesArr.filter(t => t.genre === action.filter);
            // console.log(mFilterred);
            return action.filter        

        case 'SHOW_ALL':
            return state
        default:
            return state
    }
}

/*export const fetching = (state=false, action) => {

    switch (action.type) {

        case 'FETCH_RESORT_NAMES' :
            return true;

        case 'CHANGE_SUGGESTIONS' :
            return false;

        case 'CANCEL_FETCHING' :
            return false;

        default :
            return state
    }

}*/

export default visibilityFilter