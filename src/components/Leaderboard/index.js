import { connect } from 'react-redux'
import { retrievePredictions } from 'actions/prediction'
import Leaderboard from './Leaderboard'

const combineAllMatches = worldCupData => {
    let matches = []
    
    for(const key in worldCupData.groups) {
        const group = worldCupData.groups[key]
        matches = matches.concat(group.matches);
    }
    for(const key in worldCupData.knockout) {
        const group = worldCupData.knockout[key]
        matches = matches.concat(group.matches);
    }
    return matches;
}
const mapStateToProps = (state, props) => ({
    matches: combineAllMatches(state.worldcup.worldCupData),
    predictions: state.prediction.allPredictions
})
const mapDispatchToProps = dispatch => ({
    retrievePredictions: () => dispatch(retrievePredictions())
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(Leaderboard);