
const initialState = [];

const relatedMovies = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_GENRE_SUCCESS':
      return action.payload;

    default:
      return state;
  }
};
export default relatedMovies;
