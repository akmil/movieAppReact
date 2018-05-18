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

        case 'SHOW_COMEDY':
            return action.filter;

        case 'SET_VISIBILITY_FILTER':
            return action.filter
        default:
            return state
    }

    /*switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.filter
        case 'SHOW_DRAMA':
            console.log('stateCurrent->', movies);
            //should get all todos and filter it???
            // return movies.filter(t => t.genre === t.filter)
            return action.filter
        // case 'SHOW_ACTIVE':
        //     return action.filter(t => !t.genre)

        default:
            return state
    }*/
}

export const fetching = (state=false, action) => {

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

}

export default visibilityFilter