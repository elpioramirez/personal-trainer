import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route, Switch, Link} from "react-router-dom";

import NavDrawer from "./Components/NavDrawer";

import StrapTable from "./Components/BootstrapTable";

import AddCustomer from "./Routes/AddCustomer";

// import CustomerTable from "./Components/CustomerTable"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: [],
      trainings: []
    };
    // This binding is necessary to make `this` work in the callback
    this.fetchData = this
      .fetchData
      .bind(this);
  }

  componentDidMount() {
    this.fetchData("customers");
    this.fetchData("trainings");
  }

  fetchData(param) {
    const path = `https://customerrest.herokuapp.com/api/${param}`;

    fetch(path).then(response => {
      return response.json();
    }).then(jsonResponse => {
      this.setState({[param]: jsonResponse.content});
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>

        <BrowserRouter>
          <div>

            <Link to="/home">Home</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/addCustomer">Add a Customer</Link>

            <NavDrawer/>
            <Switch>
              <Route exact path="/" render={() => <h2>this is root!</h2>}/>
              <Route path="/addCustomer" component={AddCustomer}/>

            </Switch>
          </div>
        </BrowserRouter>
        {/* <CustomerTable customers={this.state.customers}/> */}

        <StrapTable customers={this.state.customers}/>

      </div>
    );
  }
}

export default App;
