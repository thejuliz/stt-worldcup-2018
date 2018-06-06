import { connect } from 'react-redux'
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
const mapDispatchToProps = dispatch => ({});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(GroupMatchesModal)