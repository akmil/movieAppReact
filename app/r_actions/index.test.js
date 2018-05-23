import {addError,showAll,suggestMovies, fetchMovieByNameSuccess,fetchMovieByName } from './index'

describe('>>>A C T I O N --- Test',()=>{
    it('+++ actionCreator addError', () => {
        const add = addError(50)
        expect(add).toEqual({type:"ADD_ERROR", payload:50})
    });
    it('+++ actionCreator showAll', () => {
        const add = showAll(50)
        expect(add).toEqual({type:"SHOW_ALL", payload:50})
    });
    it('+++ actionCreator suggestMovies ', () => {
        //TODO
        const subtract = suggestMovies('value')()
        // expect(subtract).toEqual({type:"SHOW_ALL_MOVIE"})
    });
    it('+++ actionCreator fetchMovieByNameSuccess ', () => {
        const subtract = fetchMovieByNameSuccess([]);
        expect(subtract).toEqual({
            type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
            payload: []
        })
    });
    it('+++ actionCreator fetchMovieByName ', () => {
        //TODO
        const subtract = fetchMovieByName('movieTitle', 'searchBy')();
        // expect(subtract).toEqual({
        //     type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
        //     payload: []
        // })
    });
});