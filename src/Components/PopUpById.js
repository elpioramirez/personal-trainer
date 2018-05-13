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
                //correct date format
                const original = moment(item.date)._d
                // console.log(original);
                const added = moment(moment(original).add(item.duration, 'm'))._d
                // console.log("added " + moment(added)._d);

                return {title: item.activity, start: original, end: added, allDay: false}

            })
            return calendarContent = <BigCalendar
                step={15}
                timeslots={8}
                defaultView="agenda"
                defaultDate={new Date(2018, 4, 18)}
                events={t2}/>
        }

        //     [{         title: "My event",         allDay: false,         start: new
        // Date(2018, 0, 1, 10, 0),         end: new Date(2018, 0, 1, 14, 0)     } ]
        // const t1 = [     {         date: "2018-05-20T00:00:00.000+0000", duration:
        // 60,         activity: "yoga"     }, {         date:
        // "2018-05-23T00:00:00.000+0000",         duration: 120,         activity:
        // "karate"     } ] console.log(t2); const goal = new Date(2018, 0, 1, 14, 0);
        // const ttt = new Date(2018, 0, 1, 10, 0);
        // console.log('===================================='); console.log("start " +
        // ttt); console.log("end " + goal);
        // console.log('===================================='); const test =
        // original.map((item) => {     return console.log(item.date); })

        return (
            <div>
                <Modal show={this.props.show} onHide={this.handleClose} //css used to make the popup on top of every other element
                    style={{
                    zIndex: 9999
                }}>

                    <Modal.Header closeButton>
                        <Modal.Title>Trainings By User</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{calendarContent}</Modal.Body>
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
