import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as moment from 'moment';

export default class TrainingTableById extends Component {
    render() {
        const columns = [
            {
                Header: "date",
                accessor: "date",
                Cell: ({value}) => (
                    <span>{moment(value).format('MMMM Do YYYY')}</span>
                )
            }, {
                Header: "time",
                accessor: "date",
                Cell: ({value}) => (
                    <span>{moment(value)
                            .endOf('day')
                            .fromNow()}</span>
                )

            }, {
                Header: "activity",
                accessor: "activity"
            }, {
                Header: "duration",
                accessor: "duration"
            }
        ];
        return (
            <div>
                <ReactTable
                    data={this.props.individualTraining}
                    columns={columns}
                    defaultPageSize={30}
                    filterable={true}/>
            </div>
        );
    }
}
