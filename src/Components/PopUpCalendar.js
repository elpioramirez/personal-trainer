import React, {Component} from 'react';
import {connect} from 'react-redux';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {Button, Modal} from 'react-bootstrap';
import {POP_OFF, POP_ON} from '../actions';

import BigCalendar from 'react-big-calendar';

BigCalendar.momentLocalizer(moment);

class PopUpCalendar extends Component {
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

                <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>
                    demo modal
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
                    <Modal.Body>
                        <BigCalendar
                            popup
                            defaultDate={new Date(2018, 1, 1)}
                            events={[
                            {
                                id: 0,
                                title: 'All Day Event very long title',
                                allDay: true,
                                start: new Date(2018, 1, 0),
                                end: new Date(2018, 1, 1)
                            }, {
                                id: 1,
                                title: 'Long Event',
                                start: new Date(2015, 3, 7),
                                end: new Date(2015, 3, 10)
                            }, {
                                id: 2,
                                title: 'DTS STARTS',
                                start: new Date(2016, 2, 13, 0, 0, 0),
                                end: new Date(2016, 2, 20, 0, 0, 0)
                            }, {
                                id: 3,
                                title: 'DTS ENDS',
                                start: new Date(2016, 10, 6, 0, 0, 0),
                                end: new Date(2016, 10, 13, 0, 0, 0)
                            }, {
                                id: 4,
                                title: 'Some Event',
                                start: new Date(2015, 3, 9, 0, 0, 0),
                                end: new Date(2015, 3, 9, 0, 0, 0)
                            }, {
                                id: 5,
                                title: 'Conference',
                                start: new Date(2015, 3, 11),
                                end: new Date(2015, 3, 13),
                                desc: 'Big conference for important people'
                            }, {
                                id: 6,
                                title: 'Meeting',
                                start: new Date(2015, 3, 12, 10, 30, 0, 0),
                                end: new Date(2015, 3, 12, 12, 30, 0, 0),
                                desc: 'Pre-meeting meeting, to prepare for the meeting'
                            }, {
                                id: 7,
                                title: 'Lunch',
                                start: new Date(2015, 3, 12, 12, 0, 0, 0),
                                end: new Date(2015, 3, 12, 13, 0, 0, 0),
                                desc: 'Power lunch'
                            }, {
                                id: 8,
                                title: 'Meeting',
                                start: new Date(2015, 3, 12, 14, 0, 0, 0),
                                end: new Date(2015, 3, 12, 15, 0, 0, 0)
                            }, {
                                id: 9,
                                title: 'Happy Hour',
                                start: new Date(2015, 3, 12, 17, 0, 0, 0),
                                end: new Date(2015, 3, 12, 17, 30, 0, 0),
                                desc: 'Most important meal of the day'
                            }, {
                                id: 10,
                                title: 'Dinner',
                                start: new Date(2015, 3, 12, 20, 0, 0, 0),
                                end: new Date(2015, 3, 12, 21, 0, 0, 0)
                            }, {
                                id: 11,
                                title: 'Birthday Party',
                                start: new Date(2015, 3, 13, 7, 0, 0),
                                end: new Date(2015, 3, 13, 10, 30, 0)
                            }, {
                                id: 12,
                                title: 'Late Night Event',
                                start: new Date(2015, 3, 17, 19, 30, 0),
                                end: new Date(2015, 3, 18, 2, 0, 0)
                            }, {
                                id: 13,
                                title: 'Multi-day Event',
                                start: new Date(2015, 3, 20, 19, 30, 0),
                                end: new Date(2015, 3, 22, 2, 0, 0)
                            }, {
                                id: 14,
                                title: 'Today',
                                start: new Date(new Date().setHours(new Date().getHours() - 3)),
                                end: new Date(new Date().setHours(new Date().getHours() + 3))
                            }
                        ]}/>
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
const mapStateToProps = state => ({show: state.popUp.show})

//connect function INJECTS dispatch function as a prop!!
export default connect(mapStateToProps)(PopUpById);
