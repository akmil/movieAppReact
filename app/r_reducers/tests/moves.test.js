
import movies from './../movies';
// import renderer from "react-test-renderer";

describe('movies ', () => {
    it('movies test', () => {
        let action = {
            type: 'UPD_ALL_MOVIE',
            payload: {data: 'test', name: 'test'}
        };
        const case1 = movies([], action);
        expect(case1).toEqual('test');
    });
    it('movies test FETCH_MOVIES_BY_NAME_SUCCESS', () => {
        let action = {
            type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
            payload: {data: 'test', name: 'test'}
        };
        const case2 = movies([], action);
        expect(case2).toEqual({data: 'test', name: 'test'});
    });
});