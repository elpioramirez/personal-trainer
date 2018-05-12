import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {getAllCustomers, getAllTrainers} from './actions';

import NavDrawer from "./Components/NavDrawer";

import NewCustomer from "./Routes/NewCustomer";
import Home from "./Routes/Home";
import Customers from "./Routes/Customers";
import Trainers from "./Routes/Trainers";
import Calendar from "./Routes/Calendar";

// import CustomerTable from "./Components/CustomerTable"

class App extends Component {
  componentDidMount() {

    this
      .props
      .getAllCustomers();
    this
      .props
      .getAllTrainers();

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>

        <BrowserRouter>
          <div>

            {/* <Link to="/home">Home</Link>
            <Link to="/customers">Customers</Link>
            <Link to="/trainers">Trainers</Link>
            <Link to="/calendar">Calendar</Link>
            <Link to="/addCustomer">Add a Customer</Link> */}

            <NavDrawer/>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/home" component={Home}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/trainers" component={Trainers}/>
              <Route path="/calendar" component={Calendar}/>
              <Route path="/NewCustomer" component={NewCustomer}/>

            </Switch>
          </div>
        </BrowserRouter>
        {/* <CustomerTable customers={this.state.customers}/> */}

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {customers: state.customer.customers, trainings: state.training.trainers};
};

//fetch needed data
const mapDispatchToProps = dispatch => {
  return {
    getAllCustomers: () => getAllCustomers(dispatch),
    getAllTrainers: () => getAllTrainers(dispatch)

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
