import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'react-bootstrap'
import MatchList from 'components/MatchList';
class GroupMatchesModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <Modal
                show={this.props.isShow}
                onHide={this.props.onHide}
                aria-labelledby="contained-modal-title-sm"
                bsSize="lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-sm">{this.props.groupId}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Wrapped Text</h4>
                    <MatchList matches={this.props.matches} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={this.props.onHide}>Close</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

GroupMatchesModal.propTypes = {
    isShow: PropTypes.bool.isRequired,
    matches: PropTypes.array
}
GroupMatchesModal.defaultProps = {
    matches: []
}
export default GroupMatchesModal