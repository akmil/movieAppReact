import {getVisibleMovie, mapStateToProps } from './VisibleMovieList';
import VisibleTodoList from "./VisibleMovieList";
// import renderer from "react-test-renderer";

describe('VisibleMovieList', () => {
    it('run mapStateToProps', () => {
        const wrapper = mapStateToProps({movies:[], relatedMovies:[], visibilityFilter: true});
        expect(wrapper).toEqual({"movies": []});
    });
    it('run not empty mapStateToProps', () => {
        const stateLocal = {relatedMovies:['relatedMovies'], visibilityFilter: true};
        const wrapper = mapStateToProps(stateLocal);
        expect(wrapper).toEqual({"movies": ["relatedMovies"]});
    })
    it('getVisibleMovie test SHOW_ALL', () => {
        const movies = [{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }];
        const case1 = getVisibleMovie(movies, 'SHOW_ALL');
        expect(case1).toEqual([{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }]);
    });
    it('getVisibleMovie test SHOW_DRAMA', () => {
        const movies = [{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }];
        const case1 = getVisibleMovie(movies, 'SHOW_DRAMA');
        expect(case1).toEqual([{
            name:'test',
            genre: 'Drama2'
        }]);
    });
    it('moviesMetaData test SHOW_COMEDY', () => {
        const movies = [{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }];
        const case1 = getVisibleMovie(movies, 'SHOW_COMEDY');
        expect(case1).toEqual([{
            name:'test2',
            genre: 'Comedy'
        }]);
    });
});