import { 
    QUAL_RETRIEVE_GROUP_INFO_SUCCESS,
    QUAL_RETRIEVE_GROUP_MATCHES_SUCCESS
 } from 'actions/qualifier'
import update from 'immutability-helper'

const initialState = {
    groups: {}  
}

const qualifierReducer = (state = initialState, action) => {
    switch (action.type) {
        case QUAL_RETRIEVE_GROUP_INFO_SUCCESS:
            return update(state, {
                groups: {
                    [action.groupId]: {
                        $set: action.groupInfo
                    }
                }
            });
                
        case QUAL_RETRIEVE_GROUP_MATCHES_SUCCESS:
            return update(state, {
                groups: {
                    [action.groupId]: {
                        matches: {
                            $set: action.groupMatchInfo.matches
                        }
                    }
                }
            });
        default:
            return state
    }
}

export default qualifierReducer;