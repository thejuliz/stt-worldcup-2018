export const fetchPredictions = () => {
    return fetch('https://stt-worldcup-server.herokuapp.com/predictions').then((response) => { 
        return response.json();
    });
};

export const fetchPredictionsByUser = (userId) => {
    return fetch('https://stt-worldcup-server.herokuapp.com/prediction/' + userId).then((response) => { 
        return response.json();
    });
};

export const fetchPredictionsByUserIdStub = (userId) => {
    return later(20, 
        [{ match_name: 1, prediction: 'home' },
        { match_name: 2, prediction: 'away' },
        { match_name: 3, prediction: 'home' },
        { match_name: 4, prediction: 'draw' },
        { match_name: 9, prediction: 'home' },
        { match_name: 10, prediction: 'home' },
        { match_name: 11, prediction: 'away' },
        { match_name: 12, prediction: 'away' },
        { match_name: 13, prediction: 'away' },
        { match_name: 49, prediction: 'away' },
        { match_name: 50, prediction: 'away_p' },
        { match_name: 51, prediction: 'home_p' },
        { match_name: 52, prediction: 'home_p' },
        { match_name: 54, prediction: 'home' },
        { match_name: 55, prediction: 'draw' }]
    );
}

export const predict = (data) => {
    // data should be {match_id, home_result, away_result, user_id}
    return fetch('https://stt-worldcup-server.herokuapp.com/predict', {
        body: JSON.stringify(data), // must match 'Content-Type' header
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'include', // include, same-origin, *omit
        headers: {
          'content-type': 'application/json'
        },
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, cors, *same-origin
        referrer: 'no-referrer', // *client, no-referrer
    }).then((response) => {
        return response.json();
    });
}

export const predictStub = (userId, match_name, prediction) => {
    return later(50, {
        match_name,
        prediction
    })
}

function later(delay, value) {
    return new Promise(function(resolve) {
        setTimeout(resolve, delay, value);
    });
}
