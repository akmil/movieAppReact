let nextTodoId = 0;
export const addTodo = text => ({
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
})

export const setVisibilityFilter = filter => ({
    type: 'SHOW_COMEDY',
    filter
})

export const toggleTodo = id => ({
    type: 'TOGGLE_TODO',
    id
})

export const showAll = () => ({
    type: 'SHOW_ALL'
})

export const VisibilityFilters = {
    // SHOW_DRAMA: 'SHOW_DRAMA',
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export const addError = (message) =>
    ({
        type: 'ADD_ERROR',
        payload: message
    })

export const suggestMovies = (value, dispatch) => {

    dispatch({
        type: 'FETCH_RESORT_NAMES'
    })

    fetch(`http://react-cdp-api.herokuapp.com/${value}`)
        .then(response => response.json())
        .then(suggestions =>
            dispatch({
                type: 'CHANGE_SUGGESTIONS',
                payload: suggestions
            })
        )
        .catch(({message}) =>
            dispatch(
                addError(`could not fetch suggestions: ${message}`)
            )
        )
}

export const suggestResortName = value => dispatch => {

    dispatch({
        type: 'FETCH_RESORT_NAMES'
    })

    fetch(`http://react-cdp-api.herokuapp.com/${value}`)
        .then(response => response.json())
        .then(suggestions =>
            dispatch({
                type: 'CHANGE_SUGGESTIONS',
                payload: suggestions
            })
        )
        .catch(({message}) =>
            dispatch(
                addError(`could not fetch suggestions: ${message}`)
            )
        )

}