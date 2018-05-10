import React, { Component } from "react";
import BootstrapTable from "react-bootstrap-table-next";
import filterFactory, { textFilter } from "react-bootstrap-table2-filter";
import cellEditFactory from "react-bootstrap-table2-editor";
// ...
// function priceFormatter(column, colIndex, { sortElement, filterElement }) {
//   return (
//     <div style={ { display: 'flex', flexDirection: 'column' } }>
//       { filterElement }
//       { column.text }
//       { sortElement }
//     </div>
//   );
// }

class StrapTable extends Component {
  render() {
    const columns = [
      {
        dataField: "firstname",
        text: "firstname",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "lastname",
        text: "lastname",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "streetaddress",
        text: "streetaddress",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "postcode",
        text: "postcode",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "city",
        text: "city",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "email",
        text: "email",
        sort: true,
        filter: textFilter(),
        headerAlign: "center"
      },
      {
        dataField: "phone",
        text: "phone",
        sort: true,
        headerAlign: "center",
        filter: textFilter()

        // headerFormatter: priceFormatter
      }
    ];

    const CaptionElement = () => (
      <h3
        style={{
          borderRadius: "0.25em",
          textAlign: "center",
          color: "blue",
          border: "1px solid black",
          padding: "0.5em"
        }}
      >
        List of Trainers
      </h3>
    );

    // const defaultSorted = [{
    //   dataField: 'lastname',
    //   order: 'desc'
    // }];

    return (
      <div>
        <CaptionElement />
        <BootstrapTable
          keyField="email"
          data={this.props.customers}
          columns={columns}
          striped
          hover
          noDataIndication="Table is Empty"
          filter={filterFactory()}
          cellEdit={cellEditFactory({
            mode: "click",
            beforeSaveCell: (oldValue, newValue, row, column) => {
              console.log("Before Saving Cell!!");
            },
            afterSaveCell: (oldValue, newValue, row, column) => {
              console.log("After Saving Cell!!");
            }
          })}
          // defaultSortDirection={defaultSorted}
          // condensed
          // bordered={ false }
        />
      </div>
    );
  }
}

export default StrapTable;
