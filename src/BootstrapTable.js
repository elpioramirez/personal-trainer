
import BootstrapTable from "react-bootstrap-table-next";


import React, { Component } from "react";

class StrapTable extends Component {
  render() {
    const columns = [
      {
        dataField: "firstname",
        text: "firstname"
      },
      {
        dataField: "lastname",
        text: "lastname"
      },
      {
        dataField: "streetaddress",
        text: "streetaddress"
      },
      {
        dataField: "postcode",
        text: "postcode"
      },
      {
        dataField: "city",
        text: "city"
      },
      {
        dataField: "email",
        text: "email"
      },
      {
        dataField: "phone",
        text: "phone"
      }
    ];

    const CaptionElement = () => <h3 style={{ borderRadius: '0.25em', textAlign: 'center', color: 'blue', border: '1px solid black', padding: '0.5em' }}>List of Trainers</h3>;

    return (
      <div>
        <CaptionElement/>
        <BootstrapTable
          keyField="id"
          data={this.props.customers}
          columns={columns}
          striped
          hover
          condensed
          bordered={ false }
        />
      </div>
    );
  }
}

export default StrapTable;
