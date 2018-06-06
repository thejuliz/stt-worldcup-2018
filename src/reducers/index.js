import { combineReducers } from 'redux'
import qualiferReducer from './qualifier'
import worldCupReducer from './worldcup'
import predictionReducer from './prediction'
import userReducer from './user';

export default {
    qualifier: qualiferReducer,
    worldcup: worldCupReducer,
    prediction: predictionReducer,
    user: userReducer
};