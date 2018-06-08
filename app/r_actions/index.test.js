import {
  setVisibilityFilter,
  addError,
  showAll,
  suggestMovies,
  fetchMovieGenreSuccess,
  fetchMovieGenre,
  fetchMovieByQuery,
  fetchMovieById,
} from './index';

describe('>>>A C T I O N --- Test', () => {
  beforeEach(() => {
    global.fetch = jest.fn().mockImplementation((url) => {
      const p = new Promise((resolve, reject) => {
        resolve({
          ok: true,
          Id: '123',
          json() {
            return { Id: '123' };
          },
        });
      });

      return p;
    });
  });

  it('+++ actionCreator addError', () => {
    const add = addError(50);
    expect(add).toEqual({ type: 'ADD_ERROR', payload: 50 });
  });
  it('+++ actionCreator showAll', () => {
    const add = showAll(50);
    expect(add).toEqual({ type: 'SHOW_ALL', payload: 50 });
  });
  it('+++ actionCreator suggestMovies', async () => {
    // TODO
    const subtract = suggestMovies('value')();
    const dispatch = jest.fn();
    const response = await suggestMovies('foo')(dispatch);

    console.log('\n \n console suggestMovies');
    console.log(subtract);


    // expect(response.Id).toBe(1);
    // expect(subtract).toEqual({type:"SHOW_ALL_MOVIE"})
  });

  it('+++ actionCreator fetchMovieByQuery ', () => {
    // TODO
    const subtract = fetchMovieByQuery('query')();

    // fetchMovieByQuery('query')().then(function(result) {
    //     expect(result).toBe(true);
    //     done();
    // });
  });

  it('+++ actionCreator fetchMovieGenreSuccess ', () => {
    const subtract = fetchMovieGenreSuccess(['movies']);
    expect(subtract).toEqual({
      type: 'FETCH_MOVIES_BY_GENRE_SUCCESS',
      payload: ['movies'],
    });
  });
  it('+++ actionCreator fetchMovieGenre ', () => {
    // check : return promise
    fetchMovieGenre('genreName')().then((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('+++ actionCreator fetchMovieById ', () => {
    // check : return promise
    fetchMovieById('query')().then((result) => {
      expect(result).toBe(true);
      done();
    });
  });

  it('+++ actionCreator setVisibilityFilter ', () => {
    const subtract = setVisibilityFilter('filter');
    expect(subtract).toEqual({
      type: 'SHOW_COMEDY',
      filter: 'filter',
    });
  });
});
