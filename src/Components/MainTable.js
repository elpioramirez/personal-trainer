import React, { Component } from "react";

import ReactTable from "react-table";
import "react-table/react-table.css";

export default class MainTable extends Component {
  render() {
    const columns = [
      {
        Header: "firstname",
        accessor: "firstname"
      },
      {
        Header: "lastname",
        accessor: "lastname"
      },
      {
        Header: "streetaddress",
        accessor: "streetaddress"
      },
      {
        Header: "postcode",
        accessor: "postcode"
      },
      {
        Header: "city",
        accessor: "city"
      },
      {
        Header: "email",
        accessor: "email"
      },
      {
        Header: "phone",
        accessor: "phone"
      }]

     const tt = this.props.customers
 console.log('====================================');
 console.log(tt);
 console.log('====================================');

    // const data = [{
    //   name: 'Tanner Linsley',
    //   age: 26,
    //   friend: {
    //     name: 'Jason Maurer',
    //     age: 23,
    //   }
    // }]
  

    return (
      <div>
        <ReactTable data={tt} columns={columns} />
      </div>
    );
  }
}
