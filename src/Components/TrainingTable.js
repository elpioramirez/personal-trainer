import React, {Component} from 'react';
import ReactTable from "react-table";
import "react-table/react-table.css";
// import BootstrapTable from "react-bootstrap-table-next"; import
// filterFactory, {textFilter} from "react-bootstrap-table2-filter"; import
// cellEditFactory from "react-bootstrap-table2-editor";

export default class TrainingTable extends Component {
    render() {
        const columns = [
            {
                Header: "date",
                accessor: "date"
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
