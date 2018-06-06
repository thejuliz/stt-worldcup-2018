import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

// to be loaded from db(per user)
const MARGIN = 20;
const processPredictions = (predictions, matches) => {
    const userPredictionsMap = predictions.reduce(function(prevVal, elem){
        if(!prevVal[elem.username]) 
            prevVal[elem.username] = { predictions: [], correct: 0, wrong: 0 }
        prevVal[elem.username].predictions.push(elem);
        return prevVal;
    }, {})
    matches.forEach(match => {
        if(!match.finished) return;
        Object.keys(userPredictionsMap).forEach((username) => {
            const userPrediction = userPredictionsMap[username].predictions.find(x=> x.match_id === match.name);
            if(userPrediction) {
                if(userPrediction.prediction === match.pwinner)
                    userPredictionsMap[username].correct += 1;
                else
                    userPredictionsMap[username].wrong += 1;
            } else {
                userPredictionsMap[username].wrong += 1;
            }
        })
        
    });
    return Object.keys(userPredictionsMap).map((username) => ({
        username,
        correct: userPredictionsMap[username].correct,
        wrong: userPredictionsMap[username].wrong,
        amount: (userPredictionsMap[username].correct - userPredictionsMap[username].wrong) * MARGIN,
    })).sort((a,b) => b.amount - a.amount);
}

class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            stats:processPredictions(props.predictions, props.matches)
        }
    }
    componentDidMount() {
        this.props.retrievePredictions();
    }
    componentWillReceiveProps(nextProps) {
        this.setState({
            stats: processPredictions(nextProps.predictions, nextProps.matches)
        });
    }

    render() {
        return (
            <Table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Correct</th>
                        <th>Wrong</th>
                        <th>$$$</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.stats.map((stat) => (
                        <tr key={stat.username}>
                            <td>{stat.username}</td>
                            <td>{stat.correct}</td>
                            <td>{stat.wrong}</td>
                            <td>{stat.amount}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        )
    }
}

Leaderboard.propTypes = {
    predictions: PropTypes.array,
    matches: PropTypes.array
}
Leaderboard.defaultProps = {
    predictions: [],
    mathes: []
}
export default Leaderboard