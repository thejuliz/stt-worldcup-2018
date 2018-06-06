const AUTH_API_URL = 'http://10.23.62.34:2018/auth';

export const fetchUsers = () => {
    return fetch('https://stt-worldcup-server.herokuapp.com/users').then((response) => { 
        return response.json();
    });
}

export const loginWithPassword = (username, password) => {
    if(username === 'test') {
        return later(200, { username: 'test' });
    }
    return fetch(AUTH_API_URL + '/login', {
        body: JSON.stringify({
            username,
            password
        }), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        referrer: 'no-referrer', // *client, no-referrer
    }).then((response) => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    });
}

export const validateSession = () => {
    return fetch(AUTH_API_URL + '/user/validate', {
        credentials: 'include'
    }).then((response) => { 
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json();
    });
}


function later(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, value);
    });
}