export const MATCH_RETRIEVE_INFO = 'MATCH_RETRIEVE_INFO'

export const retrieveMatchInfo = (matchId) => ({
    type: MATCH_RETRIEVE_INFO,
    matchId: matchId
})
