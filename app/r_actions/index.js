const apiUrl = 'http://react-cdp-api.herokuapp.com/';

export const setVisibilityFilter = filter => ({
  type: 'SHOW_COMEDY',
  filter,
});

export const showAll = payload => ({
  type: 'SHOW_ALL',
  payload,
});

export const VisibilityFilters = {
  SHOW_DRAMA: 'SHOW_ALL_MOVIE',
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE',
};

export const addError = message =>
  ({
    type: 'ADD_ERROR',
    payload: message,
  });

export const suggestMovies = value => (dispatch) => {
  // dispatch({
  //     type: 'SHOW_ALL_MOVIE'
  // })

  fetch(apiUrl + value)
    .then(response => response.json())
    .then((suggestions) => {
      dispatch({
        type: 'UPD_ALL_MOVIE',
        payload: suggestions,
      });
    })
    .catch(({ message }) =>
      dispatch(addError(`could not fetch suggestions: ${message}`)));
};

export const fetchMovieGenreSuccess = movies =>
  // console.log('fetchMovieGenreSuccess', movies);
  ({
    type: 'FETCH_MOVIES_BY_GENRE_SUCCESS',
    payload: movies,
  });
export const fetchMovieGenre = genre => (dispatch) => {
  // console.log('searchBy', genre);
  const url = `${apiUrl}movies?search=${genre}&searchBy=genres`;


  const promise = fetch(url)
    .then(response => response.json());

  promise
    .then((response) => {
      dispatch(fetchMovieGenreSuccess(response.data));
    })
    .catch((error) => {
      throw (error);
    });

  return promise;
};

export const fetchMovieByQuerySuccess = movies =>
  // console.log('fetchMovieByQuerySuccess', movies);
  ({
    type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
    payload: movies,
  });
export const fetchMovieByQuery = query => (dispatch) => {
  console.log('searchBy', query);
  const url = `${apiUrl}movies?search=${query}`;

  fetch(url)
    .then(response => response.json())
    .then((response) => {
      dispatch(fetchMovieByQuerySuccess(response.data));
    })
    .catch((error) => {
      throw (error);
    });
};

export const fetchMovieByIdSuccess = movie =>
// console.log('fetchMovieByNameSuccess', movie);
  ({
    type: 'FETCH_MOVIES_BY_ID_SUCCESS',
    payload: movie,
  });
export const fetchMovieById = id => (dispatch) => {
  const promise = fetch(`${apiUrl}movies/${id}`)
    .then(response => response.json());

  promise
    .then((response) => {
      dispatch(fetchMovieByIdSuccess(response));
    })
    .catch((error) => {
      throw (error);
    });

  return promise;
};
