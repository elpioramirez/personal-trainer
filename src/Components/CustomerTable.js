import React, {Component} from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class CustomerTable extends Component {
  render() {
    const columns = [
      {
        Header: "firstname",
        accessor: "firstname"
      }, {
        Header: "lastname",
        accessor: "lastname"
      }, {
        Header: "streetaddress",
        accessor: "streetaddress"
      }, {
        Header: "postcode",
        accessor: "postcode"
      }, {
        Header: "city",
        accessor: "city"
      }, {
        Header: "email",
        accessor: "email"
      }, {
        Header: "phone",
        accessor: "phone"
      }, {
        id: 'delete',
        Header: "Delete",
        accessor: 'links[0].href',
        filterable: false,
        sortable: false,
        Cell: ({value}) => (
          <button
            onClick={() => {
            this
              .props
              .deleteCustumer(value)
              .then(() => this.props.getAllCustomers());
          }}>delete</button>
        )
      }
    ];

    return (<ReactTable
      data={this.props.customers}
      columns={columns}
      defaultPageSize={30}
      filterable={true}/>);

  }
}
