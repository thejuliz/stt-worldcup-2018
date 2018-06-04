import { 
    PRED_RETR_BY_USER,
    PRED_RETR_BY_USER_SUCCESS,
    PRED_MAKE_SUCCESS
 } from 'actions/prediction'
import update from 'immutability-helper'

const initialState = {
    predictions: [],
    myPredictions: []
}

const predictionReducer = (state = initialState, action) => {
    switch (action.type) {
        case PRED_RETR_BY_USER_SUCCESS:
            return {
                ...state, 
                myPredictions: action.predictions
            };
        case PRED_MAKE_SUCCESS:
            console.log(action.prediction.match_name);
            console.log(state.myPredictions);
            const oldPredictionIdx = state.myPredictions.findIndex(x=>x.match_name === action.prediction.match_name)
            console.log(oldPredictionIdx);
            if(oldPredictionIdx > -1) {
                return update(
                    state, { 
                    myPredictions: {
                        [oldPredictionIdx]: { $set: action.prediction }
                    }
                });
            }
            return update(
                state, {
                myPredictions: {
                    $push: [action.prediction]
                }
            });
                
        default:
            return state
    }
}

export default predictionReducer;