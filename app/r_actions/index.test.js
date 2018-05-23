import {addError,showAll,suggestMovies } from './index'

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
        const subtract = suggestMovies()
        expect(subtract).toEqual({type:"SHOW_ALL_MOVIE"})
    });
});