import React from 'react';
import { connect } from 'react-redux'
import { retrieveWorldCupData } from 'actions/worldcup'
import { retrievePredictionsByUserId } from 'actions/prediction'
import Routes from './routes'
class CoreLayout extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        const wcPromise = this.props.retrieveWorldCupData();
        const predPromise = this.props.retrievePredictionsByUserId(1);
    }
    render() {
        if(this.props.isReady){
            return (
                <Routes/>
            )
        }
        return null;
    }
}
const mapStateToProps = (state) => ({
    isReady: state.worldcup.isLoaded
})

const mapDispatchToProps = dispatch => ({
    retrieveWorldCupData: () => dispatch(retrieveWorldCupData()),
    retrievePredictionsByUserId: (userId) => dispatch(retrievePredictionsByUserId(userId))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(CoreLayout)