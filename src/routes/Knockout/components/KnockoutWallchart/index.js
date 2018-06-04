

import { connect } from 'react-redux'
import KnockoutWallchart from './KnockoutWallchart'

const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { round_16, round_8, round_4, round_2, round_2_loser } = state.worldcup.worldCupData.knockout;
    return ({
        round_16, round_8, round_4, round_2, round_2_loser
    });
};
const mapDispatchToProps = dispatch => ({
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(KnockoutWallchart)