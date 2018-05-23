import {setVisibilityFilter, addError,showAll,suggestMovies, fetchMovieByNameSuccess,fetchMovieByName } from './index'

describe('>>>A C T I O N --- Test',()=>{
    beforeEach(function() {
        global.fetch = jest.fn().mockImplementation((url) => {
            var p = new Promise((resolve, reject) => {
                resolve({
                    ok: true,
                    Id: '123',
                    json: function() {
                        return {Id: '123'}
                    }
                });
            });

            return p;
        });

    });

    it('+++ actionCreator addError', () => {
        const add = addError(50)
        expect(add).toEqual({type:"ADD_ERROR", payload:50})
    });
    it('+++ actionCreator showAll', () => {
        const add = showAll(50)
        expect(add).toEqual({type:"SHOW_ALL", payload:50})
    });
    it('+++ actionCreator suggestMovies', async  function(){
        //TODO
        const subtract = suggestMovies('value')()
        const dispatch = jest.fn();
        const response = await suggestMovies('foo')(dispatch);

        console.log('\n \n console ');
        console.log(response);

        // expect(response.Id).toBe(1);
        // expect(subtract).toEqual({type:"SHOW_ALL_MOVIE"})
    });
    it('+++ actionCreator fetchMovieByNameSuccess ', () => {
        const subtract = fetchMovieByNameSuccess([]);
        expect(subtract).toEqual({
            type: 'FETCH_MOVIES_BY_NAME_SUCCESS',
            payload: []
        })
    });
    it('+++ actionCreator setVisibilityFilter ', () => {
        const subtract = setVisibilityFilter('filter');
        expect(subtract).toEqual({
            type: 'SHOW_COMEDY',
            filter: 'filter'
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