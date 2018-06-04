import { connect } from 'react-redux'
import { retrieveQualifierGroupMatches } from 'actions/qualifier'
import GroupMatchesModal from './GroupMatchesModal';

const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { groups } = state.worldcup.worldCupData;
    return ({
        group: groups[groupId],
        matches: groups[groupId] ? groups[groupId].matches : []
        //sortedTeamsWitResult: orderTeamsBasedOnResult(teams)
    });
}
console.log(retrieveQualifierGroupMatches)
const mapDispatchToProps = dispatch => ({
    retrieveQualifierGroupMatches: groupId => dispatch(retrieveQualifierGroupMatches(groupId))
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(GroupMatchesModal)