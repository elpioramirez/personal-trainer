import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCustomers, getAllTrainers } from './actions';

import NavDrawer from "./Components/NavDrawer";

import NewCustomer from "./Routes/NewCustomer";
import Home from "./Routes/Home";
import Customers from "./Routes/Customers";
import Trainers from "./Routes/Trainers";
import Calendar from "./Routes/Calendar";
import NewTraining from "./Routes/NewTraining";

// import IndividualTraining from "./Routes/IndividualTraining";

class App extends Component {
  componentDidMount() {

    this
      .props
      .getAllCustomers();
    this
      .props
      .getAllTrainers();

    if (!this.props.customers.isReady) {
      console.log('not ready')
    }

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <BrowserRouter>
          <div>
            <NavDrawer />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/customers" component={Customers} />
              <Route path="/trainers" component={Trainers} />
              <Route path="/calendar" component={Calendar} />
              <Route path="/NewCustomer" component={NewCustomer} />
              <Route path="/AddTraining" component={NewTraining} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { customers: state.customer.customers, trainings: state.training.trainers };
};

//fetch needed data
const mapDispatchToProps = dispatch => {
  return {
    getAllCustomers: () => { dispatch(getAllCustomers()); },
    getAllTrainers: () => { dispatch(getAllTrainers()); }

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
