import React from 'react'
import PropTypes from 'prop-types';
import { Grid, Row, Col } from 'react-bootstrap'
import Moment from 'react-moment'
import classNames from 'classnames'
import DateLabel from 'components/DateLabel';
import TeamLabel from 'components/TeamLabel';
import './MatchList.css'
class MatchList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render(){
        return (
            <Grid className={classNames('match-list')} fluid>
                {this.props.matches.map(this.renderMatch)}
            </Grid>
        )
    }
    renderMatch(match) {
        return (
            <Row>
                <Col md={3}><DateLabel date={match.date}/></Col>
                <Col md={3}><TeamLabel className="pull-right" team={match.team1} /></Col>
                
                <Col md={2}><div className="text-center">{match.result && match.result[0]} - {match.result && match.result[1]}</div></Col>
                <Col md={3}><TeamLabel team={match.team2} /></Col>
                {/* <Col md={1}><VoteButton matchId={match.matchId} /></Col> */}
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