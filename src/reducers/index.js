import { combineReducers } from 'redux'
import qualiferReducer from './qualifier'
import worldCupReducer from './worldcup'
import predictionReducer from './prediction'

export default {
    qualifier: qualiferReducer,
    worldcup: worldCupReducer,
    prediction: predictionReducer
};