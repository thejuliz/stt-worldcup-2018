import { 
    WC_RETRIEVE_DATA,
    WC_RETRIEVE_DATA_SUCCESS
 } from 'actions/worldcup'
import update from 'immutability-helper'

const initialState = {
    worldCupData: {}  
}

const worldCupReducer = (state = initialState, action) => {
    switch (action.type) {
        case WC_RETRIEVE_DATA_SUCCESS:
            return update(state, {
                worldCupData: {
                    $set: action.worldCupData
                }
            });
                
        default:
            return state
    }
}

export default worldCupReducer;