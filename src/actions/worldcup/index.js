import { fetchWorldCupData } from 'datasource/worldcupApi'
export const WC_RETRIEVE_DATA = "WC_RETRIEVE_DATA"
export const WC_RETRIEVE_DATA_SUCCESS = "WC_RETRIEVE_DATA_SUCCESS"

export const retrieveWorldCupData = () => {
    return (dispatch) => {
        dispatch({
            type: WC_RETRIEVE_DATA
        })
        return fetchWorldCupData().then(worldCupData => {
            dispatch({
                type: WC_RETRIEVE_DATA_SUCCESS,
                worldCupData
            })
        })
    }  
}