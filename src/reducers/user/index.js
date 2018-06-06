import { 
    USER_LOGIN,
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAILED
 } from 'actions/user'

const initialState = {
    username: undefined,
    isLoggingIn: false,
    authenticated: false
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                isLoggingIn: true,
                authenticated: false
            }
        case USER_LOGIN_SUCCESS:
            return {
                ...state,
                username: action.username,
                isLoggingIn: false,
                authenticated: true
            }
        case USER_LOGIN_FAILED:
            return {
                ...state,
                isLoggingIn: false,
                authenticated: false
            }
        default:
            return state
    }
}

export default userReducer;