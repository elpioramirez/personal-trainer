import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {Button, Modal} from 'react-bootstrap';
import {POP_OFF, POP_ON} from '../actions';

import BigCalendar from 'react-big-calendar';

moment.locale();

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

        const newLocal = this.props.sessions;
        if (newLocal === undefined) {
            var calendarContent = <p>nothing</p>
        } else {
            const t2 = newLocal.map((item) => {
                //correct date format in JS
                const original = moment(item.date)._d
                // add the time duration to the original
                const added = moment(moment(original).add(item.duration, 'm'))._d
                //create custom object

                return {title: item.activity, start: original, end: added, allDay: false}

            })
            var calendarContent = <BigCalendar
                step={15}
                timeslots={8}
                defaultView="month"
                defaultDate={new Date(2018, 4, 18)}
                events={t2}/>
        }

        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleClose} //css used to make the popup on top of every other element
                    style={{
                    zIndex: 9999
                }}>

                    <Modal.Header closeButton>
                        <Modal.Title>Trainings By User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body style={{
                        height: 500
                    }}>{calendarContent}</Modal.Body>
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
