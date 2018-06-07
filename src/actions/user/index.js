import { loginWithPassword, validateSession, logout as logoutApi } from 'datasource/userApi'
export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGIN_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_LOGIN_FAILED = "USER_LOGIN_FAILED"
export const USER_VALIDATE = "USER_LOGIN"
export const USER_VALIDATE_SUCCESS = "USER_LOGIN_SUCCESS"
export const USER_VALIDATE_FAILED = "USER_LOGIN_FAILED"
export const USER_LOGOUT = "USER_LOGOUT"
export const USER_LOGOUT_SUCCESS = "USER_LOGOUT_SUCCESS"
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

export const logout = () => {
    return (dispatch) => {
        dispatch({
            type: USER_LOGOUT
        });
        return logoutApi().then(authResult => {
            document.cookie = 'JSESSIONID=; expires=Thu, 01 Jan 1970 00:00:01 GMT;';
            dispatch({
                type: USER_LOGOUT_SUCCESS
            })
        })
    }
}