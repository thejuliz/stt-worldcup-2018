import React from 'react'
import PropTypes from 'prop-types'
import { Button, Row, Col } from 'react-bootstrap'
import { PredictionType } from 'actions/prediction'
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
        return (
            <div className="prediction-button">
                <Row>
                    <Col md={12} className='text-center small'>
                        <Button bsSize='sm' className='form-control' onClick={this.togglePopover}>
                        {this.renderPredictionLabel()}
                        </Button>
                    </Col>
                </Row>
                <PredictionPopover matchName={this.props.match.name} isShow={this.state.isShowPopover} popoverTarget={this.state.popoverTarget} onClose={this.closePopover} />
            </div>
        )
    }
    renderPredictionLabel() {
        const { currentPrediction, match } = this.props; 
        switch(currentPrediction) {
            case PredictionType.HomeWin: return match.home_team_info.emojiString + 'Win';
            case PredictionType.AwayWin: return match.home_team_info.emojiString + 'Win';
            case PredictionType.Draw: return 'Draw';
            case PredictionType.HomeWinPenalty: return match.home_team_info.emojiString + ' Win(Pen.)';
            case PredictionType.AwayWinPenalty: return match.home_team_info.emojiString + ' Win(Pen.)';
            default: return 'Make Prediction';
        }
        
    }
}

PredictionButton.propTypes = {
    match: PropTypes.object.isRequired
}

export default PredictionButton