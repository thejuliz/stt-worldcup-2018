const initialState = {
    results: {}
}

const matchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'MATCH_RETRIEVE_INFO_SUCCESS':
            return {
                ...state,
                results: {
                    ...state.groups,
                    [action.matchId]: action.matchInfo
                }
            }
        default: 
            return state
    }
}