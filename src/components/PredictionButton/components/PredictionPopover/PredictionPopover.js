import React from 'react'
import PropTypes from 'prop-types'
import { Popover, Overlay, Button } from 'react-bootstrap'
import { PredictionType } from 'actions/prediction'
class PredictionPopover extends React.Component {
    constructor(props) {
        super(props)
        this.makePrediction = this.makePrediction.bind(this);
    }
    makePrediction(prediction) {
        this.props.makePrediction('1792', this.props.matchName, prediction)
        this.props.onClose();
    }
    render() {
        return (
            <Overlay
                show={this.props.isShow}
                target={this.props.popoverTarget}
                placement="top"
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
        if (this.props.type === 'group') {
            return (
                <div>
                    <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.HomeWin)}>Home Win</Button>
                    <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.Draw)}>Draw</Button>
                    <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.AwayWin)}>Away Win</Button>
                </div>
            )
        }
        return (
            <div>
                <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.HomeWin)}>Home Win</Button>
                <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.HomeWinPenalty)}>Home Win (Pen.)</Button>
                <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.AwayWin)}>Away Win</Button>
                <Button bsSize='sm' onClick={() => this.makePrediction(PredictionType.AwayWinPenalty)}>Away Win (Pen.)</Button>
            </div>
        )
    }
}

PredictionPopover.propTypes = {
    matchName: PropTypes.number.isRequired,
    isShow: PropTypes.bool,
    popoverTarget: PropTypes.object,
    onClose: PropTypes.func,
    type: PropTypes.oneOf(['group', 'knockout'])
}
PredictionPopover.defaultProps = {
    type: 'group'
}

export default PredictionPopover