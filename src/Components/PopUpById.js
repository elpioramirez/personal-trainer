import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {Button, Modal} from 'react-bootstrap';
import {POP_OFF, POP_ON} from '../actions';

import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

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

        // console.table(this.props.sessions);

        return (
            <div>

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    demo modal
                </Button>

                <Modal show={this.props.show} onHide={this.handleClose} //css used to make the popup on top of every other element
                    style={{
                    zIndex: 9999
                }}>

                    <Modal.Header closeButton>
                        <Modal.Title>Trainings By User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <BigCalendar
                            startAccessor='date'
                            endAccessor='duration'
                            step={15}
                            timeslots={8}
                            defaultView="week"
                            defaultDate={new Date(2018, 5, 13)}
                            events={this.props.sessions}/>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

//connects component with redux store state
const mapStateToProps = state => ({show: state.popUp.show, sessions: state.individualTraining.trainingById})

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(PopUpById);
