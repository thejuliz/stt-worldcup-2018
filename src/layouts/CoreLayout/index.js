import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { withRouter } from 'react-router'
import { retrieveWorldCupData } from 'actions/worldcup'
import { retrievePredictionsByUserId, retrievePredictions } from 'actions/prediction'
import CoreLayout from './CoreLayout'

const mapStateToProps = (state) => ({
    isReady: state.worldcup.isLoaded,
    username: state.user.username,
    authenticated: state.user.authenticated,
    currentLocation: state.routing.location.pathname
})

const mapDispatchToProps = dispatch => ({
    retrieveWorldCupData: () => dispatch(retrieveWorldCupData()),
    retrievePredictionsByUserId: (userId) => dispatch(retrievePredictionsByUserId(userId)),
    retrievePredictions: () => dispatch(retrievePredictions()),
    redirect: (path) => {
        dispatch(push(path))
    }
});

export default withRouter(connect(
      mapStateToProps,
      mapDispatchToProps
  )(CoreLayout))