import React from 'react';
import PropTypes from 'prop-types'
import { Grid, Row, Col, Table, Button } from 'react-bootstrap';
import TeamLabel from 'components/TeamLabel';
import DateLabel from 'components/DateLabel';
import PredictionButton from 'components/PredictionButton'
class KnockoutMatchup extends React.Component {
    render() {
        const { match, round } = this.props;
        const { home_team_info, away_team_info, home_result, away_result } = match;

        return (
            <div>
                <Table striped bordered condensed hover>
                    <thead>
                        <tr>
                            <th colspan='3'>
                                {round}
                                <div>
                                <DateLabel className='small' date={match.date} />
                                </div>
                            </th>
                        </tr>
                    </thead>
                    <tr>
                        <td colspan='2'> <TeamLabel team={home_team_info} /></td>
                        <td><div className='pull-right'>{home_result || '-'}</div></td>
                    </tr>
                    <tr>
                        <td colspan='2'> <TeamLabel team={away_team_info} /></td>
                        <td><div className='pull-right'>{away_result || '-'}</div></td>
                    </tr>
                    <tr>
                        <td colspan='3' style={{ padding: 0}}><PredictionButton match={match} /></td>
                    </tr>
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