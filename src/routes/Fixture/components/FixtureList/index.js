import { connect } from 'react-redux'
import FixtureList from './FixtureList'
const mapStateToProps = (state, props) => {
    console.log(state.worldcup.worldCupData);
    return {
    groups: state.worldcup.worldCupData.groups,
    knockout: state.worldcup.worldCupData.knockout
}};
const mapDispatchToProps = dispatch => ({
});

export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(FixtureList);