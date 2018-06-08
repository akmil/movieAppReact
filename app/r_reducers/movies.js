/* export const initialState = [
    {id:121, text:'hello 1', genre: 'Drama2'},
    {id:122, text:'hello 2', genre: 'Comedy'},
    {id:123, text:'hello 3', genre: 'Drama2'}
    ]; */

// const urlImgHost = 'https://images.pexels.com/photos';
// const urlImgQuery = '?auto=compress&cs=tinysrgb&h=350';
const initialState = [];

const movies = (state = initialState, action) => {
  switch (action.type) {
    case 'UPD_ALL_MOVIE':
      console.log('UPD_ALL_MOVIE', action.payload.data);
      return action.payload.data;

    case 'FETCH_MOVIES_BY_NAME_SUCCESS':
      // console.log('FETCH_MOVIES_BY_NAME_SUCCESS (movies.reducer)', action);
      return action.payload;

      /* case 'ADD_TODO':
            return [
                ...state,
                {
                    id: action.id,
                    text: action.text,
                    completed: false
                }
            ]
        case 'TOGGLE_TODO':
            return state.map(movie =>
                (movie.id === action.id)
                    ? {...movie, completed: !movie.completed}
                    : movie
            ) */

    default:
      return state;
  }
};
export default movies;
