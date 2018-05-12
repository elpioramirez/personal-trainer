import React, {Component} from 'react';
import {connect} from 'react-redux'
import {Button, Modal} from 'react-bootstrap';
import {POP_OFF, POP_ON} from '../actions';
class PopUpById extends Component {
    handleClose = () => {
        this
            .props
            .dispatch({type: POP_OFF})
    }

    handleShow = () => {
        this
            .props
            .dispatch({type: POP_ON})
    }

    render() {

        return (
            <div>
                <p>Click to get the full Modal experience!</p>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    Launch demo modal
                </Button>

                <Modal
                    show={this.props.show}
                    onHide={this.handleClose}
                    style={{
                    zIndex: 9999
                }}>

                    <Modal.Header closeButton>
                        <Modal.Title>Trainings By User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

//connects component with redux store state
const mapStateToProps = state => ({show: state.popUp.show})

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(PopUpById);
