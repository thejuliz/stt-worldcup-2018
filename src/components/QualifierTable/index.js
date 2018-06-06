import { connect } from 'react-redux'
import QualifierTable from './QualifierTable';

const mapStateToProps = (state, props) => {
    const { groupId } = props;
    const { groups } = state.worldcup.worldCupData;
    return ({
        group: groups[groupId]
    });
}

const mapDispatchToProps = dispatch => ({});

  export default connect(
      mapStateToProps,
      mapDispatchToProps
  )(QualifierTable)