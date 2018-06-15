import React from 'react'
import PropTypes from 'prop-types'
import { Table } from 'react-bootstrap'

// to be loaded from db(per user)
const MARGIN = {
    /* mfs */
    "navees": 20,
    "nuttapongt": 20,
    "supakarnb": 20,
    "yodchaik":20,
    "vutipong":30,
    "thitipan":30,
    "thanawat":30,
    "theerapat":30,
    "sunicha":30,
    "pattarasai":30,
    "pongsil":40,
    "julapat":40,
    "pakpoom":50,
    "tanachai":50,
    "chaiyasit":60,
    "sanchai":60,
    "surachai":70,
    "rittichai":70,
    "prapoj":80,
    "chukiad":80,
    "putthipong":100,
    
    /* mkt */
    "teerapat":30,
    "jiraphon":30,
    "nattapongph":40,
    "non":50,

    /* qc */
    "monkaween": 20,
    "supanuch": 30,
    "phuridej": 30,
    "kirkkiat": 50,
    "duanghatai": 70,
    "benjamasc": 90,

    /* oper */
    "phanwasin": 70,
    "piriyapornch": 40,
    "pakornwo": 40,
    "patb": 30,
    "prajak": 90,

    /* outsource */
    "niravitw": 40,
    
    /* intern */
    "siraphatg": 10,
    "somchitk": 10

};
const processPredictions = (predictions, matches) => {
    const userPredictionsMap = predictions.reduce(function(prevVal, elem){
        if(!prevVal[elem.username]) 
            prevVal[elem.username] = { predictions: [], pending:0, correct: 0, wrong: 0 }
        prevVal[elem.username].predictions.push(elem);
        return prevVal;
    }, {})
    matches.forEach(match => {
        Object.keys(userPredictionsMap).forEach((username) => {
            const userPrediction = userPredictionsMap[username].predictions.find(x=> x.match_id === match.name);
            if(userPrediction) {
                if(!match.finished) {
                    userPredictionsMap[username].pending += 1;
                } else {
                    if(userPrediction.prediction === match.pwinner)
                        userPredictionsMap[username].correct += 1;
                    else
                        userPredictionsMap[username].wrong += 1;
                }
            } else {
                userPredictionsMap[username].wrong += match.finished ? 1 : 0;
            }
        })
        
    });
    return Object.keys(userPredictionsMap).map((username) => ({
        username,
        predicted: userPredictionsMap[username].predictions.length,
        pending: userPredictionsMap[username].pending,
        correct: userPredictionsMap[username].correct,
        wrong: userPredictionsMap[username].wrong,
        amount: userPredictionsMap[username].wrong * (MARGIN[username.toLowerCase()] ? MARGIN[username.toLowerCase()] : 0),
    })).sort((a,b) => {
        if(b.amount > a.amount) return 1;
        if(b.amount < a.amount) return -1;
        else return b.predicted - a.predicted;
    });
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
            <Table hover striped>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Predicted (out of 64)</th>
                        <th>Pending</th>
                        <th>Correct</th>
                        <th>Wrong</th>
                        <th>$$$</th>
                    </tr>
                </thead>
                <tbody>
                    { this.state.stats.map((stat) => (
                        <tr key={stat.username}>
                            <td>{stat.username}</td>
                            <td>{stat.predicted}</td>
                            <td>{stat.pending}</td>
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