import React, {Component} from 'react';
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, {textFilter} from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";

class TrainingTable extends Component {
    render() {
        const columns = [
            {
                dataField: "date",
                text: "date",
                sort: true,
                filter: textFilter(),
                headerAlign: "center"
            }, {
                dataField: "duration",
                text: "duration",
                sort: true,
                filter: textFilter(),
                headerAlign: "center"
            }, {
                dataField: "activity",
                text: "activity",
                sort: true,
                filter: textFilter(),
                headerAlign: "center"
            }, {
                dataField: "customer",
                text: "customer",
                sort: true,
                filter: textFilter(),
                headerAlign: "center"
            }
        ];
        return (
            <div>
                <BootstrapTable
                    keyField="date"
                    data={this.props.trainings}
                    columns={columns}
                    striped
                    hover
                    noDataIndication="No trainings at the moment"
                    filter={filterFactory()}
                    cellEdit={cellEditFactory({
                    mode: "click",
                    beforeSaveCell: (oldValue, newValue, row, column) => {
                        console.log("Before Saving Cell!!");
                    },
                    afterSaveCell: (oldValue, newValue, row, column) => {
                        console.log("After Saving Cell!!");
                    }
                })}/>
            </div>
        );
    }
}

export default TrainingTable;