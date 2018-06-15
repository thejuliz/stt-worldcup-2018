import React from 'react';
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap';
import classNames from 'classnames';
import TeamLabel from 'components/TeamLabel';
import DateLabel from 'components/DateLabel';
import Score from 'components/Score';
import PredictionButton from 'components/PredictionButton'
import './KnockoutMatchup.css';

class KnockoutMatchup extends React.Component {
    render() {
        const { match, round } = this.props;
        const { home_team_info, away_team_info, home_result, away_result, home_penalty, away_penalty } = match;

        return (
            <div className="knockout-matchup">
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th colSpan='3'>
                                <div>
                                    {round}
                                    <span className="match-name">#{match.name}</span>
                                </div>
                                <div>
                                <DateLabel className='small' date={match.date} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className={classNames({winner: match.pwinner && match.pwinner.includes('home')})}>
                            <td colSpan='2'> <TeamLabel team={home_team_info} /></td>
                            <td><div className='pull-right'><Score score={match.home_result} penaltyScore={match.home_penalty} pendingChar='-'/></div></td>
                        </tr>
                        <tr className={classNames({winner: match.pwinner && match.pwinner.includes('away')})}>
                            <td colSpan='2'> <TeamLabel team={away_team_info} /></td>
                            <td><div className='pull-right'><Score score={match.away_result} penaltyScore={match.away_penalty} pendingChar='-'/></div></td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan='3' style={{ padding: 0}}><PredictionButton match={match} /></td>
                        </tr>
                    </tfoot>
                </Table>
            </div>
        )
    }
}

KnockoutMatchup.propTypes = {
    match: PropTypes.object.isRequired,
    round: PropTypes.string.isRequired
}

export default KnockoutMatchup;