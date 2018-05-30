import relatedMovies from './../relatedMovies';
// import renderer from "react-test-renderer";

describe('relatedMovies ', () => {
    it('relatedMovies test FETCH_MOVIES_BY_GENRE_SUCCESS', () => {
        let action = {
            type: 'FETCH_MOVIES_BY_GENRE_SUCCESS',
            payload: [{data: 'test', name: 'test'}]
        };
        const case_ID_SUCCESS = relatedMovies([], action);
        expect(action.type).toEqual('FETCH_MOVIES_BY_GENRE_SUCCESS');
        expect(case_ID_SUCCESS).toEqual([{data: 'test', name: 'test'}]);
    });
});