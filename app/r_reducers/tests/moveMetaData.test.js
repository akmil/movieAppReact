
import moviesMetaData from './../moveMetaData';
// import renderer from "react-test-renderer";

describe('moviesMetaData', () => {
  it('moviesMetaData test', () => {
    const action = {
      type: 'UPD_ALL_MOVIE',
      payload: { data: 'test', name: 'test' },
    };
    const case1 = moviesMetaData([], action);
    expect(case1).toEqual({ name: 'test' });
  });
  it('moviesMetaData test FETCH_MOVIES_META_BY_NAME_SUCCESS', () => {
    const action = {
      type: 'FETCH_MOVIES_META_BY_NAME_SUCCESS',
      payload: { data: 'test', name: 'test' },
    };
    const case2 = moviesMetaData([], action);
    expect(case2).toBe(action.payload);
  });
});
