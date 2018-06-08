const initialState = [];

const movieDetails = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES_BY_ID_SUCCESS':
      return action.payload;

    default:
      return state;
  }
};
export default movieDetails;
