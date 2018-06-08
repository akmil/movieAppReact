import movieDetails from '../movieDetails';
// import renderer from "react-test-renderer";

describe('movieDetails ', () => {
  it('movieDetails test FETCH_MOVIES_BY_GENRE_SUCCESS', () => {
    const action = {
      type: 'FETCH_MOVIES_BY_ID_SUCCESS',
      payload: [{ data: 'test-movieDetail', name: 'test' }],
    };
    const case_ID_SUCCESS = movieDetails([], action);
    expect(action.type).toEqual('FETCH_MOVIES_BY_ID_SUCCESS');
    expect(case_ID_SUCCESS).toEqual([{ data: 'test-movieDetail', name: 'test' }]);
  });
});
