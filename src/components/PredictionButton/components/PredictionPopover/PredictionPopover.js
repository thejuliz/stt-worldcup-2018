import React from 'react'
import PropTypes from 'prop-types'
import { Popover, Overlay, Button, ButtonGroup, ToggleButton, ToggleButtonGroup, ProgressBar, Row, Col } from 'react-bootstrap'
import { PredictionType } from 'actions/prediction'
import TeamLabel from 'components/TeamLabel'
class PredictionPopover extends React.Component {
    constructor(props) {
        super(props)
        this.makePrediction = this.makePrediction.bind(this);
    }
    makePrediction(prediction) {
        this.props.makePrediction(this.props.username, this.props.match.name, prediction)
        this.props.onClose();
    }
    render() {
        return (
            <Overlay
                show={this.props.isShow}
                target={this.props.popoverTarget}
                placement="top"
                rootClose
                onHide={this.props.onClose}
            >
                <Popover id="popover-contained" title={(
                    <div>
                        <strong>Make your prediction</strong>      
                        <Button className="close" aria-label="Close" onClick={this.props.onClose}>
                        <span aria-hidden="true">&times;</span></Button>
                    </div>)}
                >
                    <div>
                        {this.renderPredictionStat()}
                    </div>
                    <div>{this.renderPredictionOptions()}</div></Popover>
            </Overlay>
        )
    }
    renderPredictionStat() {
        const { home_team_info, away_team_info } = this.props.match
        const { currentPrediction, predictions } = this.props
        let stat = { home: 0, away:0, draw:0, homep:0, awayp:0 }
        if(predictions.length > 0) {
            stat = predictions.reduce((prevVal, elem) => {
                prevVal[elem.prediction] += 1 / predictions.length * 100
                return prevVal;
            }, stat);
        }
        if (this.props.match.type === 'group') {
            return (
                <div className="prediction-stat">
                    <Row>
                        <Col md={5}><TeamLabel team={home_team_info} /></Col>
                        <Col md={7}>
                            <ProgressBar bsStyle="success" now={stat.home} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>Draw</Col>
                        <Col md={7}>
                            <ProgressBar bsStyle="info" now={stat.draw} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}><TeamLabel team={away_team_info} /></Col>
                        <Col md={7}>
                        <ProgressBar bsStyle="danger" now={stat.away} />
                        </Col>
                    </Row>
                </div>
            );
        }
        return (
            <div className="prediction-stat">
                <Row>
                    <Col md={5}><TeamLabel team={home_team_info} />(Pen.)</Col>
                    <Col md={7}>
                        <ProgressBar bsStyle="info" now={stat.homep} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}><TeamLabel team={home_team_info} /></Col>
                    <Col md={7}>
                        <ProgressBar bsStyle="success" now={stat.home} />
                    </Col>
                </Row>
                
                <Row>
                    <Col md={5}><TeamLabel team={away_team_info} /></Col>
                    <Col md={7}>
                    <ProgressBar bsStyle="danger" now={stat.away} />
                    </Col>
                </Row>
                <Row>
                    <Col md={5}><TeamLabel team={away_team_info} />(Pen.)</Col>
                    <Col md={7}>
                    <ProgressBar bsStyle="wawrning" now={stat.awayp} />
                    </Col>
                </Row>
            </div>
        )
    }
    renderPredictionOptions() {
        const { home_team_info, away_team_info } = this.props.match
        const { currentPrediction } = this.props
        if (this.props.match.type === 'group') {
            return (
                <ToggleButtonGroup type="radio" name="options" defaultValue={currentPrediction}>
                    <ToggleButton 
                        value={PredictionType.HomeWin}
                        bsSize='xs' 
                        onClick={() => this.makePrediction(PredictionType.HomeWin)}
                    ><TeamLabel team={home_team_info} /></ToggleButton>
                    <ToggleButton
                        value={PredictionType.Draw}
                        bsSize='xs' 
                        onClick={() => this.makePrediction(PredictionType.Draw)}
                    >Draw</ToggleButton>
                    <ToggleButton
                        value={PredictionType.AwayWin}
                        bsSize='xs'
                        onClick={() => this.makePrediction(PredictionType.AwayWin)}
                    ><TeamLabel team={away_team_info} /></ToggleButton>
                </ToggleButtonGroup>
            )
        }
        return (
            <ToggleButtonGroup type="radio" name="options" defaultValue={currentPrediction}>
                <ToggleButton
                    value={PredictionType.HomeWinPenalty}
                    bsSize='xs' 
                    onClick={() => this.makePrediction(PredictionType.HomeWinPenalty)}
                ><TeamLabel team={home_team_info} />(Pen.)</ToggleButton>
                <ToggleButton 
                    value={PredictionType.HomeWin}
                    bsSize='xs' 
                    onClick={() => this.makePrediction(PredictionType.HomeWin)}
                ><TeamLabel team={home_team_info} /></ToggleButton>
                <ToggleButton 
                    value={PredictionType.AwayWin}
                    bsSize='xs' 
                    onClick={() => this.makePrediction(PredictionType.AwayWin)}
                ><TeamLabel team={away_team_info} /></ToggleButton>
                <ToggleButton 
                    value={PredictionType.AwayWinPenalty}
                    bsSize='xs' 
                    onClick={() => this.makePrediction(PredictionType.AwayWinPenalty)}
                ><TeamLabel team={away_team_info} />(Pen.)</ToggleButton>
            </ToggleButtonGroup>
        )
    }
}

PredictionPopover.propTypes = {
    match: PropTypes.object.isRequired,
    isShow: PropTypes.bool,
    popoverTarget: PropTypes.object,
    onClose: PropTypes.func,
    currentPrediction: PropTypes.string,
    type: PropTypes.oneOf(['group', 'knockout'])
}
PredictionPopover.defaultProps = {
    type: 'group',
    isShow: false,
    currentPrediction: undefined
}

export default PredictionPopover