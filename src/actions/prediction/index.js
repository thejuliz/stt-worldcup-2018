import { fetchPredictionsByUser,fetchPredictions, predict } from 'datasource/predictionApi'
export const PRED_RETR_BY_USER = "PRED_RETR_BY_USER"
export const PRED_RETR_BY_USER_SUCCESS = "PRED_RETR_BY_USER_SUCCESS"
export const PRED_MAKE = "PRED_MAKE"
export const PRED_MAKE_SUCCESS = "PRED_MAKE_SUCCESS"
export const PRED_RETR = "PRED_RETR"
export const PRED_RETR_SUCCESS = "PRED_RETR_SUCCESS"

export const PredictionType = {
    HomeWin: 'home',
    AwayWin: 'away',
    Draw: 'draw',
    HomeWinPenalty: 'homep',
    AwayWinPenalty: 'awayp'
};

export const retrievePredictionsByUserId = (userId) => {
    return (dispatch) => {
        dispatch({
            type: PRED_RETR_BY_USER,
            userId
        });
        return fetchPredictionsByUser(userId).then(predictions => {
            dispatch({
                type: PRED_RETR_BY_USER_SUCCESS,
                predictions
            })
        })
    }  
}

export const makePrediction = (userId, match_name, prediction) => {
    return (dispatch) => {
        dispatch({
            type: PRED_MAKE,
            userId,
            prediction
        });
        return predict(userId, match_name, prediction).then((res) => {
            dispatch({
                type: PRED_MAKE_SUCCESS,
                match_id: res.match_id,
                prediction: res.prediction,
                userId
            })
        })
    }  
}

export const retrievePredictions = () => {
    return (dispatch) => {
        dispatch({
            type: PRED_RETR
        });
        return fetchPredictions().then(predictions => {
            dispatch({
                type: PRED_RETR_SUCCESS,
                predictions
            })
        })
    }  
}
