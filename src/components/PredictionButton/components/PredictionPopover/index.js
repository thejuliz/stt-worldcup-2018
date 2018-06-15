import { connect } from 'react-redux'
import { makePrediction } from 'actions/prediction'
import PredictionPopover from './PredictionPopover'
const mapStateToProps = (state, props) => ({
    username: state.user.username,
    predictions: state.prediction.allPredictions.filter(x=> x.match_id === props.match.name)
})
const mapDispatchToProps = dispatch => ({
    makePrediction: (userId, match_name, prediction) => dispatch(makePrediction(userId, match_name, prediction))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(PredictionPopover);