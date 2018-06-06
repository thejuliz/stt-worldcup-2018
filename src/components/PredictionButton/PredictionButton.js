import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'react-bootstrap'
import classNames from 'classnames'
import { PredictionType } from 'actions/prediction'
import TeamLabel from 'components/TeamLabel'
import PredictionPopover from './components/PredictionPopover'
import './PredictionButton.css'
class PredictionButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isReady: false,
            isShowPopover: false
        }
        this.togglePopover = this.togglePopover.bind(this);
        this.closePopover = this.closePopover.bind(this);
    }
    togglePopover(e) {
        this.setState({
            isShowPopover: !this.state.isShowPopover,
            popoverTarget: e.target
        })
    }
    closePopover(){
        this.setState({
            isShowPopover: false
        })
    }
    render() {
        const { currentPrediction } = this.props
        return (
            <div className="prediction-button">
                <Row>
                    <Col md={12} className='text-center'>
                        { currentPrediction &&
                            <Button bsSize='sm' className={classNames('predicted', 'form-control')} onClick={this.togglePopover}>
                                {this.renderPredictionLabel()}
                            </Button>
                        }
                        { !currentPrediction && 
                            <Button bsSize='sm' className={classNames('form-control')} onClick={this.togglePopover}>
                                Make Prediction
                            </Button>
                        }
                    </Col>
                </Row>
                <PredictionPopover
                    match={this.props.match} 
                    currentPrediction={this.props.currentPrediction}
                    isShow={this.state.isShowPopover}
                    popoverTarget={this.state.popoverTarget} 
                    onClose={this.closePopover} 
                />
            </div>
        )
    }
    renderPredictionLabel() {
        const { currentPrediction, match } = this.props; 
        switch(currentPrediction) {
        case PredictionType.HomeWin: return (<span><TeamLabel team={match.home_team_info}/> Win</span>);
            case PredictionType.AwayWin: return (<span><TeamLabel team={match.away_team_info}/> Win</span>);
            case PredictionType.Draw: return 'Draw';
            case PredictionType.HomeWinPenalty: return (<span><TeamLabel team={match.home_team_info}/> Win (Pen.)</span>);
            case PredictionType.AwayWinPenalty: return (<span><TeamLabel team={match.away_team_info}/> Win (Pen.)</span>);
            default: return null;
        }
        
    }
}

PredictionButton.propTypes = {
    match: PropTypes.object.isRequired,
    currentPrediction: PropTypes.string
}
PredictionButton.defaultProps = {
    currentPrediction: undefined
}

export default PredictionButton