import React from 'react'
import PropTypes from 'prop-types';
import classNames from 'classnames'
class TeamLabel extends React.Component {
    render() {
        return (
            <span
                className={classNames('team-label', this.props.className)}
            >{this.props.team.emojiString} {this.props.team.name}</span>
        )
    }
}
TeamLabel.propTypes = {
    team: PropTypes.object.isRequired
}
export default TeamLabel;