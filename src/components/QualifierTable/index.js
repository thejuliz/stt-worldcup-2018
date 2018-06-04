import { connect } from 'react-redux'
import { retrieveQualifierGroupInfo } from 'actions/qualifier'
import QualifierTable from './QualifierTable';

const orderTeamsBasedOnResult = (teamsWithResult) => {
    return teamsWithResult;
}
const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { groups } = state.worldcup.worldCupData;
    return ({
        group: groups[groupId]
    });
}

const mapDispatchToProps = dispatch => ({
    retrieveQualifierGroupInfo: groupId => dispatch(retrieveQualifierGroupInfo(groupId))
});

  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(QualifierTable)