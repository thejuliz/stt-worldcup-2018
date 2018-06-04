import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import moment from 'moment'
import Moment from 'react-moment'
import classNames from 'classnames'
import DateLabel from 'components/DateLabel';
import TeamLabel from 'components/TeamLabel';
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
           
                <Row>
                    <Col md={2}><DateLabel date={match.date}/></Col>
                    <Col md={3}><TeamLabel className="pull-right" team={match.home_team_info} /></Col>
                    
                    <Col md={2}><div className="text-center">{match.result && match.result[0]} - {match.result && match.result[1]}</div></Col>
                    <Col md={3}><TeamLabel team={match.away_team_info} /></Col>
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