import { connect } from 'react-redux'
import { retrievePredictionByUserId } from 'actions/prediction'
import PredictionButton from './PredictionButton';

const mapStateToProps = (state, props) => {
    const { match } = props;
    const { myPredictions } = state.prediction;
    const predictionObj = myPredictions.find(x => x.match_name === match.name)
    return ({
        currentPrediction: predictionObj ? predictionObj.prediction: null
    });
}
const mapDispatchToProps = dispatch => ({});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(PredictionButton)