
import moviesMetaData from './../moveMetaData';
// import renderer from "react-test-renderer";

describe('moviesMetaData', () => {
    it('moviesMetaData test', () => {
        let action = {
            type: 'UPD_ALL_MOVIE',
            payload: {data: 'test', name: 'test'}
        };
        const case1 = moviesMetaData([], action);
        expect(case1).toBeEqual({name: 'test'});
    });
    it('moviesMetaData test FETCH_MOVIES_META_BY_NAME_SUCCESS', () => {
        let action = {
            type: 'FETCH_MOVIES_META_BY_NAME_SUCCESS',
            payload: {data: 'test', name: 'test'}
        };
        const case2 = moviesMetaData([], action);
        expect(case2).is({data: 'test', name: 'test'});
    });
});