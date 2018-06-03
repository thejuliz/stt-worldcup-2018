import { connect } from 'react-redux'
import { retrieveQualifierGroupMatches } from 'actions/qualifier'
import GroupMatchesModal from './GroupMatchesModal';

console.log('here');
const orderTeamsBasedOnResult = (teamsWithResult) => {
    return teamsWithResult;
}
const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { groups } = state.qualifier;
    // let groupName = "Group Unknown";
    // let teams = [];
    // if (groupId in groups) {
    //     groupName = groups[groupId].groupName;
    //     teams = groups[groupId].teams
    // }
    return ({
        group: groups[groupId],
        matches: groups[groupId] ? groups[groupId].matches : []
        //sortedTeamsWitResult: orderTeamsBasedOnResult(teams)
    });
}

const mapDispatchToProps = dispatch => ({
    retrieveQualifierGroupMatches: groupId => dispatch(retrieveQualifierGroupMatches(groupId))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(GroupMatchesModal)