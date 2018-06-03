import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'
import GroupMatchesModal from './components/GroupMatchesModal';

class QualifierTable extends React.Component {
    constructor(props) {
        super(props)
        this.showMatchesModal = this.showMatchesModal.bind(this);
        this.closeMatchesModal = this.closeMatchesModal.bind(this);
        this.state = {
            groupName: 'Group Z',
            sortedTeamsWitResult: [],
            isShowMatchesModal: false
        }
    }
    componentWillMount(){
        this.props.retrieveQualifierGroupInfo(this.props.groupId)
    }
    componentWillReceiveProps(nextProps) {
        const { groupId, group } = nextProps;
        console.log('a', group)
        this.state.sortedTeamsWitResult = group.teams;
        this.state.groupName = group.groupName
    }
    showMatchesModal() {
        this.setState({
            isShowMatchesModal: true
        })
    }
    closeMatchesModal() {
        this.setState({
            isShowMatchesModal: false
        })
    }
    render() {
        return (
            <div>
                <h4>{this.state.groupName}</h4>
                <span onClick={this.showMatchesModal}>View matches</span>
                <Table className={'small'}>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Played</th>
                            <th>Win</th>
                            <th>Draw</th>
                            <th>Lose</th>
                            <th>Agg.</th>
                            <th>Points</th>
                        </tr>
                    </thead>
                    {this.renderTeamInGroup()}
                </Table>
                <GroupMatchesModal 
                    isShow={this.state.isShowMatchesModal} 
                    groupId={this.props.groupId} 
                    onHide={this.closeMatchesModal}
                />
            </div>
        )
    }

    renderTeamInGroup() {
        return (
            <tbody>
            { this.state.sortedTeamsWitResult.map((result)=> {
                return (<tr>
                    <td>{result.teamName}</td>
                    <td>{result.played}</td>
                    <td>{result.win}</td>
                    <td>{result.draw}</td>
                    <td>{result.lose}</td>
                    <td>{result.goalFor} - {result.goalAgainst}</td>
                    <td>{result.points}</td>
                </tr>)
            })}
            </tbody>
        )
    }
}

QualifierTable.propTypes = {
    groupId: PropTypes.number.isRequired,
    group: PropTypes.object.isRequired
}
QualifierTable.defaultProps = {
    groupId: 0,
    group: undefined
}

export default QualifierTable