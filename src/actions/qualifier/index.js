import { 
    fetchQualifierGroupInfo,
    fetchQualifierGroupMatches
 } from 'datasource/qualifierApi';

export const QUAL_RETRIEVE_GROUP_INFO = 'QUAL_RETRIEVE_GROUP_INFO'
export const QUAL_RETRIEVE_GROUP_INFO_SUCCESS = 'QUAL_RETRIEVE_GROUP_INFO_SUCCESS'
export const QUAL_RETRIEVE_GROUP_MATCHES = 'QUAL_RETRIEVE_GROUP_MATCHES'
export const QUAL_RETRIEVE_GROUP_MATCHES_SUCCESS = 'QUAL_RETRIEVE_GROUP_MATCHES_SUCCESS'

export const retrieveQualifierGroupInfo = (groupId) => {
    return (dispatch) => {
        dispatch({
            type: QUAL_RETRIEVE_GROUP_INFO,
            groupId: groupId
        })
        fetchQualifierGroupInfo(groupId).then(groupInfo => {
            dispatch({
                type: QUAL_RETRIEVE_GROUP_INFO_SUCCESS,
                groupId,
                groupInfo
            })
        })
    }    
}

export const retrieveQualifierGroupMatches = (groupId) => {
    console.log(groupId)
    return (dispatch) => {
        dispatch({
            type: QUAL_RETRIEVE_GROUP_MATCHES,
            groupId: groupId
        })
        fetchQualifierGroupMatches(groupId).then(groupMatchInfo => {
            dispatch({
                type: QUAL_RETRIEVE_GROUP_MATCHES_SUCCESS,
                groupId,
                groupMatchInfo
            })
        })
    }    
}



export const test = () => {}
