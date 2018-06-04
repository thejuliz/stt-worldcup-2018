import { connect } from 'react-redux'
import { makePrediction } from 'actions/prediction'
import PredictionPopover from './PredictionPopover'
const mapStateToProps = (state, props) => ({})
const mapDispatchToProps = dispatch => ({
    makePrediction: (userId, match_name, prediction) => dispatch(makePrediction(userId, match_name, prediction))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(PredictionPopover);