import { connect } from 'react-redux'
import { toggleTodo } from '../../../r_actions/index'
// import TodoList from '../components/TodoList'
import {ResultsBody} from './../../resultsBox/resultsBox';

const getVisibleMovie = (movies, filter) => {
    console.log('___ =VisibleTodoList= filter -> ', filter);
    console.log('___ =VisibleTodoList= movies -> ', movies);

    switch (filter) {
        case 'SHOW_DRAMA':
            return movies.filter(t => t.genre === 'Drama2')
        case 'SHOW_COMEDY':
            return movies.filter(t => t.genre === 'Comedy')
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

const mapDispatchToProps = dispatch => {
    console.log('___ =VisibleTodoList= onTodoClick');
    //Do nothing
    return {
        onClick: filter => {
            dispatch(filter => ({
                type: 'SHOW_DRAMA-1',
                filter
            }))
        }
    }
}

const VisibleTodoList = connect(
    mapStateToProps,
    mapDispatchToProps
)(ResultsBody);

export default VisibleTodoList