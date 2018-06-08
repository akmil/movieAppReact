
const moviesMetaData = (state = [], action) => {
  switch (action.type) {
    case 'UPD_ALL_MOVIE':
      // console.log('UPD_ALL_MOVIE', action.payload.data);
      delete action.payload.data;
      return action.payload;

    case 'FETCH_MOVIES_META_BY_NAME_SUCCESS':
      delete action.payload.data;
      // console.log('FETCH_MOVIES_META_BY_NAME_SUCCESS', action.payload);
      return action.payload;

    default:
      return state;
  }
};
export default moviesMetaData;
