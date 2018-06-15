import React from 'react';
import PropTypes from 'prop-types';
import { isNullOrUndefined } from 'util';

const Score = ({ score, penaltyScore, pendingChar }) => (
    <span>
        {isNullOrUndefined(score) ? pendingChar : score}
        {isNullOrUndefined(penaltyScore) ? '' : ` (${penaltyScore})`}
    </span>
);

Score.propTypes = {
    score: PropTypes.number,
    penaltyScore: PropTypes.number,
    pendingChar: PropTypes.string
}
Score.defaultProps = {
    score: undefined,
    penaltyScore: undefined,
    pendingChar: ''
}

export default Score;