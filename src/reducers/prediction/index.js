import { 
    PRED_RETR_BY_USER_SUCCESS,
    PRED_MAKE_SUCCESS,
    PRED_RETR_SUCCESS
 } from 'actions/prediction'
import update from 'immutability-helper'

const initialState = {
    allPredictions: [],
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
            const oldPredictionIdx = state.myPredictions.findIndex(x=>x.match_id === action.match_id)
            if(oldPredictionIdx > -1) {
                return update(
                    state, { 
                    myPredictions: {
                        [oldPredictionIdx]: { 
                            $set: {
                                prediction: action.prediction, 
                                match_id: action.match_id
                            } 
                        }
                    }
                });
            }
            return update(
                state, {
                myPredictions: {
                    $push: [{ 
                        prediction: action.prediction, 
                        match_id: action.match_id
                    }]
                }
            });
        case PRED_RETR_SUCCESS:
            return {
                ...state, 
                allPredictions: action.predictions
            };    
        default:
            return state
    }
}

export default predictionReducer;