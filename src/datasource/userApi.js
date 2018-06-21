import qs from 'querystring'
const AUTH_API_URL = './auth';
//const AUTH_API_URL = 'http://localhost:8080';

export const fetchUsers = () => {
    return fetch('https://stt-worldcup-server.herokuapp.com/users').then((response) => { 
        return response.json();
    });
}

export const loginWithPassword = (username, password) => {
    if(username === 'test') {
        return later(200, { username: 'test' });
    }
    return fetch(AUTH_API_URL + '/login.jsp', {
        body:  qs.stringify({
            username,
            password
        }), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, same-origin, *omit
        headers: {
            // 'Accept': 'application/json',
            "Content-Type": "application/x-www-form-urlencoded"
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //mode: 'cors', // no-cors, cors, *same-origin
        referrer: 'no-referrer', // *client, no-referrer
    }).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    });
}

export const validateSession = () => {
    return fetch(AUTH_API_URL + '/validate.jsp', {
        credentials: 'same-origin',
        //mode: 'cors'
    }).then((response) => { 
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    });
}

export const logout = () => {
    return fetch(AUTH_API_URL + '/logout.jsp', {
        credentials: 'same-origin',
    });
}

function later(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, value);
    });
}