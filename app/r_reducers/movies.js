/*export const initialState = [
    {id:121, text:'hello 1', genre: 'Drama2'},
    {id:122, text:'hello 2', genre: 'Comedy'},
    {id:123, text:'hello 3', genre: 'Drama2'}
    ];*/

const urlImgHost = 'https://images.pexels.com/photos';
const urlImgQuery = '?auto=compress&cs=tinysrgb&h=350';
const initialState = [{
        title:`Movie title 4`,
        genre:`Drama2`,
        releaseDate:`1299`,
        src:`${urlImgHost}/460304/pexels-photo-460304.jpeg${urlImgQuery}`
    },
    {
        title:`Movie title Comedy`,
        genre:`Comedy`,
        releaseDate:`1395`,
        src:`${urlImgHost}/460305/pexels-photo-460305.jpeg${urlImgQuery}`
    },
    {
        title:`Movie title 5`,
        genre:`Drama2`,
        releaseDate:`1395`,
        src:`${urlImgHost}/460307/pexels-photo-460307.jpeg${urlImgQuery}`
    }
];

const movies = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TODO':
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
            )

        default:
            return state
    }
}
export default movies;