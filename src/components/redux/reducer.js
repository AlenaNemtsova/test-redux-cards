const initialState = []

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_FILMS':
            return [...action.payload]
        case 'DELETE_FILM':
            return (
                state.filter(item => item.id !== action.payload.id)
            )
        default:
            return state
    }
}
export default reducer