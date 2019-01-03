import React, { Component } from "react";

import "./App.css";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { getAllCustomers, getAllTrainers } from './actions';

import NavDrawer from "./Components/NavDrawer";

import NewCustomer from "./Routes/NewCustomer";
import Home from "./Routes/Home";
import Customers from "./Routes/Customers";
import Trainers from "./Routes/Trainers";
// import Calendar from "./Routes/Calendar";
import NewTraining from "./Routes/NewTraining";


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
    const { customers, trainings } = this.props;
    //once all data is present redirect to trainers view
    let allDataFetched = false;
    if (customers.length !== 0 && trainings.length !== 0) {
      allDataFetched = true;
    }

    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavDrawer />
            <Switch>
              {/* <Route exact path="/" component={Home} /> */}
              <Route exact path="/" render={() => (
                allDataFetched ? (
                  <Redirect to="/trainers" />
                ) : (
                    <Home />
                  )
              )} />
              {/* <Route path="/home" component={Home} /> */}
              <Route path="/customers" component={Customers} />
              <Route path="/trainers" component={Trainers} />
              {/* <Route path="/calendar" component={Calendar} /> */}
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
