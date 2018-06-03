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