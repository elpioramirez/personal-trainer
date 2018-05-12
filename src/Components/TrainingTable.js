import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
import * as moment from 'moment';

export default class TrainingTable extends Component {
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
                Header: "customer",
                accessor: "customer.firstname"
            }, {
                Header: "delete",
                accessor: "id",
                filterable: false,
                sortable: false,
                Cell: ({value}) => (
                    <button
                        onClick={() => {
                        this
                            .props
                            .deleteTraining(value)
                            .then(() => this.props.getAllTrainers());
                    }}>delete</button>
                )
            }
        ];
        return (
            <div>
                <ReactTable
                    data={this.props.trainings}
                    columns={columns}
                    defaultPageSize={30}
                    filterable={true}/>
            </div>
        );
    }
}
