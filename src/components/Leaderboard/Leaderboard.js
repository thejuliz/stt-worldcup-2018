import React from 'react'
import PropTypes from 'prop-types'
import { Table, Col, Row } from 'react-bootstrap'

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
    "oranut":40,
    "non":50,

    /* qc */
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
    "monkaween": 20,
    
    /* intern */
    "siraphatg": 10,
    "somchitk": 10,
    "chawitu": 10

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

const sortByAmount = (isAscending) => (user1, user2) => {
    if(user1.amount > user2.amount) return isAscending ? 1 : -1;
    if(user1.amount < user2.amount) return isAscending ? -1 :1;
    else return user2.predicted - user1.predicted;
}
const sortByWrong = (isAscending) => (user1, user2) => {
    if(user1.wrong > user2.wrong) return isAscending ? 1 : -1;
    if(user1.wrong < user2.wrong) return isAscending ? -1 : 1;
    else return user2.predicted - user1.predicted;
}
const sortByCorrect = (isAscending) => (user1, user2) => {
    if(user1.correct > user2.correct) return isAscending ? 1 : -1;
    if(user1.correct < user2.correct) return isAscending ? -1 : 1;
    else return user2.predicted - user1.predicted;
}
class Leaderboard extends React.Component {
    constructor(props) {
        super(props);
        const processed = processPredictions(props.predictions, props.matches)
        this.toggleSortAmount = this.toggleSortAmount.bind(this);
        this.toggleSortCorrect = this.toggleSortCorrect.bind(this);
        this.toggleSortWrong = this.toggleSortWrong.bind(this);
        this.state = {
            stats: processed,
            curSort: 'amount',
            sortFn: sortByAmount(false),
            isAscending: false,
            total: processed.reduce((amt, x) => amt + x.amount, 0)
        }
    }
    componentDidMount() {
        this.props.retrievePredictions();
    }
    componentWillReceiveProps(nextProps) {
        const processed = processPredictions(nextProps.predictions, nextProps.matches)
        this.setState({
            stats: processed,
            total: processed.reduce((amt, x) => amt + x.amount, 0)
        });
    }
    toggleSortAmount() {
        const { isAscending, curSort } = this.state;
        const nextAscending = curSort === 'amount' ? !isAscending: isAscending;
        this.setState({
            curSort: 'amount',
            isAscending: nextAscending,
            sortFn: sortByAmount(nextAscending)
        });
    }
    toggleSortWrong() {
        const { isAscending, curSort } = this.state;
        const nextAscending = curSort === 'wrong' ? !isAscending: isAscending;
        this.setState({
            curSort: 'wrong',
            isAscending: nextAscending,
            sortFn: sortByWrong(nextAscending)
        });
    }
    toggleSortCorrect() {
        const { isAscending, curSort } = this.state;
        const nextAscending = curSort === 'correct' ? !isAscending: isAscending;
        this.setState({
            curSort: 'correct',
            isAscending: nextAscending,
            sortFn: sortByCorrect(nextAscending)
        });
    }
    render() {
        return (
            <Row>
                <Col md={12} className="text-center">
                    <h3>ค่าเสียหายปัจจุบัน: <b>{ this.state.total }</b></h3>
                </Col>
                <Col md={12}>
                    <Table hover striped>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Predicted (out of 64)</th>
                                <th>Pending</th>
                                <th><a onClick={(e) => {
                                    e.stopPropagation();
                                    this.toggleSortCorrect()
                                }}>Correct {this.renderDirButton('correct')}</a></th>
                                <th><a onClick={(e) => {
                                    e.stopPropagation();
                                    this.toggleSortWrong()
                                }}>Wrong {this.renderDirButton('wrong')}</a></th>
                                <th><a onClick={(e) => {
                                    e.stopPropagation();
                                    this.toggleSortAmount()
                                }}>$$$ {this.renderDirButton('amount')}</a></th>
                            </tr>
                        </thead>
                        <tbody>
                            { this.state.stats.sort(this.state.sortFn).map((stat) => (
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
                        <tfoot>
                            <tr>
                                <td colSpan={6}></td>
                            </tr>
                        </tfoot>
                    </Table>
                </Col>
            </Row>
        )
    }
    renderDirButton(sortType) {
        const { curSort, isAscending } = this.state;
        if(sortType === curSort) {
            if(isAscending)
                return <span className="glyphicon glyphicon-sort-by-order" aria-hidden="true"></span>
            else 
                return <span className="glyphicon glyphicon-sort-by-order-alt" aria-hidden="true"></span>
        }
        return null;
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