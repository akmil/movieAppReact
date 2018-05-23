
import {getVisibleMovie} from './VisibleMovieList';
// import renderer from "react-test-renderer";

describe('VisibleMovieList', () => {
    it('getVisibleMovie test SHOW_ALL', () => {
        const movies = [{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }];
        const case1 = getVisibleMovie(movies, 'SHOW_ALL');
        expect(case1).toBe([{
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
        expect(case1).toBe([{
            name:'test',
            genre: 'Drama2'
        }]);
    });
    it('moviesMetaData test FETCH_MOVIES_META_BY_NAME_SUCCESS', () => {
        const movies = [{
            name:'test',
            genre: 'Drama2'
        },{
            name:'test2',
            genre: 'Comedy'
        }];
        const case1 = getVisibleMovie(movies, 'SHOW_COMEDY');
        expect(case1).toBe([{
            name:'test2',
            genre: 'Comedy'
        }]);
    });
});