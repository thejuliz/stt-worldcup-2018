import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import classNames from 'classnames'
import DateLabel from 'components/DateLabel';
import TeamLabel from 'components/TeamLabel';
import Score from 'components/Score';
import PredictionButton from 'components/PredictionButton';
import './MatchList.css'

const compareFixturesByDate = (a,b) => {
    return moment(a.date) - moment(b.date)
}
class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <Grid className={classNames('match-list')} fluid>
                <Row className='fixture-header'>
                    <Col md={2}>Date</Col>
                    <Col md={3}>Home Team</Col>
                    <Col md={2}>Result</Col>
                    <Col md={3}>Away Team</Col>
                    <Col md={2}>Your Prediction</Col>
                </Row>
                {this.props.matches.sort(compareFixturesByDate).map(this.renderMatch)}
            </Grid>
        )
    }
    renderMatch(match) {
        return (     
                <Row key={match.name}>
                    <Col md={2}><DateLabel date={match.date}/></Col>
                    <Col md={3}>
                        <TeamLabel 
                            className={classNames({
                                "pull-right":true,
                                winner: match.pwinner && match.pwinner.includes('home')
                            })}
                            team={match.home_team_info}
                        />
                    </Col>
                    <Col md={2}>
                        <div className="text-center">
                            <Score score={match.home_result} penaltyScore={match.home_penalty} />
                            { ' - '}
                            <Score score={match.away_result} penaltyScore={match.away_penalty} />
                        </div>
                    </Col>
                    <Col md={3}>
                        <TeamLabel 
                            className={classNames({
                                winner: match.pwinner && match.pwinner.includes('away')
                            })}
                            team={match.away_team_info}
                        /></Col>
                    <Col md={2}><PredictionButton match={match} /></Col>
                </Row>
           
        )
    }
}

MatchList.propTypes = {
    matches: PropTypes.array
}

MatchList.defaultPropts = {
    matches: []
}

export default MatchList;