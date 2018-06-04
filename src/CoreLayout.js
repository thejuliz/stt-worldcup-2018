import React from 'react';
import { connect } from 'react-redux'
import { retrieveWorldCupData } from 'actions/worldcup'
import { retrievePredictionsByUserId } from 'actions/prediction'
import Routes from './routes'
class CoreLayout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false
        }
    }
    componentWillMount() {
        const wcPromise = this.props.retrieveWorldCupData();
        const predPromise = this.props.retrievePredictionsByUserId(1);
        Promise.all([wcPromise, predPromise]).then(() => {
            this.setState({
                isReady: true
            })
        })
    }
    render() {
        if(this.state.isReady){
            return (
                <Routes/>
            )
        }
        return null;
    }
}
const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => ({
    retrieveWorldCupData: () => dispatch(retrieveWorldCupData()),
    retrievePredictionsByUserId: (userId) => dispatch(retrievePredictionsByUserId(userId))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(CoreLayout)