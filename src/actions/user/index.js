import { loginWithPassword, validateSession } from 'datasource/userApi'
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"
export const USER_VALIDATE = "USER_LOGIN"
export const USER_VALIDATE_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_VALIDATE_FAILED = "USER_LOGIN_FAILED"

export const login = (username, password) => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN
        })
        return loginWithPassword(username, password).then(authResult => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                username: authResult.username
            })
        }).catch((err) => {
            dispatch({
                type: USER_LOGIN_FAILED,
                err
            })
        })
    }  
}

export const validate = () => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGIN
        })
        return validateSession().then(authResult => {
            dispatch({
                type: USER_LOGIN_SUCCESS,
                username: authResult.username
            })
        }).catch((err) => {
            dispatch({
                type: USER_VALIDATE_FAILED,
                err
            })
        })
    }  
}