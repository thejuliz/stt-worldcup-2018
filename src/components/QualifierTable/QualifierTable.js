import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'react-bootstrap'
import classNames from 'classnames'
import GroupMatchesModal from './components/GroupMatchesModal';
import TeamLabel from 'components/TeamLabel';
import './QualifierTable.css'

const compareByPoints = (a,b) => {
    if (b.points>a.points) return true;
    else if(b.points === a.points){
        if(b.goalFor - b.goalAgainst > a.goalFor - a.goalAgainst) return true;
        else if (b.goalFor - b.goalAgainst === a.goalFor - a.goalAgainst){
           return b.goalFor - a.goalFor; 
        }
    }
    return false;
}
class QualifierTable extends React.Component {
    constructor(props) {
        super(props)
        this.showMatchesModal = this.showMatchesModal.bind(this);
        this.closeMatchesModal = this.closeMatchesModal.bind(this);
        this.state = {
            groupName: 'Group Z',
            isShowMatchesModal: false
        }
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
            <div className='qualifier-table'>
                <div>
                    <span className='group-name'>{this.props.group.name}</span>
                    <Button className='pull-right' bsSize='sm' onClick={this.showMatchesModal}>View matches</Button>
                </div>
                <Table className={'small'}>
                    <thead>
                        <tr>
                            <th>Team</th>
                            <th>Pl'd</th>
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
            { this.props.group.teams.sort(compareByPoints).map((result, index)=> {
                return (<tr key={result.name} className={classNames({first: index === 0, second: index === 1})}>
                    <td><TeamLabel team={result} /></td>
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
    groupId: PropTypes.string.isRequired,
    group: PropTypes.object.isRequired
}
QualifierTable.defaultProps = {
    groupId: 0,
    group: undefined
}

export default QualifierTable