import React, { Component } from "react";
import SkyLight from 'react-skylight';
import { Button, Modal } from 'react-bootstrap';
import ReactTable from "react-table";
import "react-table/react-table.css";
import CustomerForm from "./CustomerForm";

export default class CustomerTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
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
        Cell: ({ value }) => (
          <button
            onClick={() => {
              this
                .props
                .deleteCustumer(value)
                .then(() => this.props.getAllCustomers());
            }}>delete</button>
        )
      }, {

        Header: "Show trainings",
        accessor: 'links[2].href',
        filterable: false,
        sortable: false,
        Cell: ({ value }) => (
          <button
            onClick={() => {
              this
                .props
                .getTrainingsById(value)
            }}>
            All Trainings</button>
        )
      }
    ];

    return (
      <div>
        <button onClick={() => this.toggle()}>New Customer</button>
        <ReactTable
          data={this.props.customers}
          columns={columns}
          defaultPageSize={30}
          filterable={true} />

        {/* <SkyLight
          dialogStyles={popUpStyles}
          hideOnOverlayClicked
          ref={ref => this.animated = ref}
          transitionDuration={500}>
          <h1>New Customer</h1>
          <CustomerForm onSubmit={this.props.addCustomer} />
        </SkyLight> */}
        <Modal style={{
          zIndex: 9999
        }} show={this.state.modal} onHide={this.toggle} >

          <Modal.Header closeButton>
            <Modal.Title>New customer form</Modal.Title>
          </Modal.Header>
          <Modal.Body style={{
            height: "100%",
            textAlign: "center"
          }}>
            <CustomerForm onSubmit={this.props.addCustomer} />
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.handleClose}>Close</Button>
          </Modal.Footer>

        </Modal>
      </div>

    );

  }
}
