import React, {Component} from "react";
import SkyLight from 'react-skylight';

import ReactTable from "react-table";
import "react-table/react-table.css";
import CustomerForm from "./CustomerForm";

export default class CustomerTable extends Component {
  _executeBeforeModalOpen(v) {
    alert('v =' + v);
  }
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
      }, {

        Header: "Training",
        accessor: 'links[0].href',
        filterable: false,
        sortable: false,
        Cell: ({value}) => (
          <button onClick={() => this.animated.show()}>Add Training</button>
        )
      }
    ];

    return (
      <div>
        <button onClick={() => this.animated.show()}>New Customer</button>
        <ReactTable
          data={this.props.customers}
          columns={columns}
          defaultPageSize={30}
          filterable={true}/>

        <SkyLight
          hideOnOverlayClicked
          beforeOpen={this._executeBeforeModalOpen}
          ref={ref => this.animated = ref}
          transitionDuration={1000}>
          <CustomerForm onSubmit={this.props.addCustomer}/>
        </SkyLight>
      </div>

    );

  }
}
