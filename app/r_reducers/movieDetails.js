/*export const initialState = [
    {id:121, text:'hello 1', genre: 'Drama2'},
    {id:122, text:'hello 2', genre: 'Comedy'},
    {id:123, text:'hello 3', genre: 'Drama2'}
    ];*/

// const urlImgHost = 'https://images.pexels.com/photos';
// const urlImgQuery = '?auto=compress&cs=tinysrgb&h=350';
const initialState = [];

const movieDetails = (state = initialState, action) => {
    switch (action.type) {

        case 'FETCH_MOVIES_BY_ID_SUCCESS':
            // console.log('FETCH_MOVIES_BY_NAME_SUCCESS (movies.reducer)', action);
            return action.payload

        default:
            return state
    }
}
export default movieDetails;