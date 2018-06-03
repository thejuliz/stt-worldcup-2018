import React from 'react'
import PropTypes from 'prop-types'

class VoteButton extends React.Component {
    constructor() {
        this.state = {
            isReady: false
        }
    }
    componentDidMount() {
        this.props.getUserVote(this.props.matchId);
    }
    render() {
        if (!isReady) return null;
    }
}

VoteButton.propTypes = {
    matchId: PropTypes.number.isRequired,
    match: PropTypes.object.isRequired
}

export default VoteButton