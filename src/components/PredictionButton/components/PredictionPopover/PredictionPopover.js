import React from 'react'
import PropTypes from 'prop-types'
import { Popover, Overlay, Button, ButtonGroup, ToggleButton, ToggleButtonGroup } from 'react-bootstrap'
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
                >{this.renderPredictionOptions()}</Popover>
            </Overlay>
        )
    }
    renderPredictionOptions() {
        const { home_team_info, away_team_info } = this.props.match
        const { currentPrediction } = this.props
        if (this.props.type === 'group') {
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
            <ButtonGroup>
                <Button 
                    bsSize='sm' 
                    onClick={() => this.makePrediction(PredictionType.HomeWin)}
                ><TeamLabel team={home_team_info} /></Button>
                <Button
                    bsSize='sm' 
                    onClick={() => this.makePrediction(PredictionType.HomeWinPenalty)}
                ><TeamLabel team={home_team_info} />(Pen.)</Button>
                <Button 
                    bsSize='sm' 
                    onClick={() => this.makePrediction(PredictionType.AwayWin)}
                ><TeamLabel team={away_team_info} /></Button>
                <Button 
                    bsSize='sm' 
                    onClick={() => this.makePrediction(PredictionType.AwayWinPenalty)}
                ><TeamLabel team={away_team_info} />(Pen.)</Button>
            </ButtonGroup>
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