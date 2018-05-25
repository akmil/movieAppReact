const apiUrl = 'http://react-cdp-api.herokuapp.com/';

export const setVisibilityFilter = filter => ({
    type: 'SHOW_COMEDY',
    filter
})

export const showAll = (payload) => ({
    type: 'SHOW_ALL',
    payload: payload
})

export const VisibilityFilters = {
    SHOW_DRAMA: 'SHOW_ALL_MOVIE',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addError = (message) =>
    ({
        type: 'ADD_ERROR',
        payload: message
    })

export const suggestMovies = value => dispatch => {
    
    // dispatch({
    //     type: 'SHOW_ALL_MOVIE'
    // })

    fetch(apiUrl+value)
        .then(response => response.json())
        .then(suggestions =>{
            dispatch({
                type: 'UPD_ALL_MOVIE',
                payload: suggestions
            })
          }
        )
        .catch(({message}) =>
            dispatch(
                addError(`could not fetch suggestions: ${message}`)
            )
        )
}

export const fetchMovieByNameSuccess = (movies) => {
  console.log('fetchMovieByNameSuccess', movies);
  return {
    type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
    payload: movies
  }
};

export const fetchMovieByName = (movieTitle, searchBy) => dispatch => {
  console.log('searchBy', searchBy);

  fetch(`${apiUrl}movies?search=${movieTitle}&searchBy=${searchBy}`)
      .then(response => response.json())
      .then(response =>{
          dispatch(fetchMovieByNameSuccess(response.data));
        }
      )
      .catch(error => {
        throw(error);
      });
}

export const fetchMovieByIdSuccess = (movie) => {
    console.log('fetchMovieByNameSuccess', movie);
    return {
        type: 'FETCH_MOVIES_BY_ID_SUCCESS',
        payload: movie
    }
};

export const fetchMovieById = (id) => dispatch => {
    const promise = fetch(`${apiUrl}movies/${id}`)
        .then(response => response.json());

    promise
      .then(response =>{
          dispatch(fetchMovieByIdSuccess(response));
        }
      )
      .catch(error => {
        throw(error);
      });

    return promise
}