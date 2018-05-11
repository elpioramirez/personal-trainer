import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {connect} from "react-redux";
import {getAllCustomers, getAllTrainers} from './actions'
import NavDrawer from "./Components/NavDrawer";

import StrapTable from "./Components/BootstrapTable";

import AddCustomer from "./Routes/AddCustomer";

// import CustomerTable from "./Components/CustomerTable"

class App extends Component {
  // constructor(props) {   super(props);   this.state = {     customers: [],
  // trainings: []   };   // This binding is necessary to make `this` work in the
  // callback   this.fetchData = this     .fetchData     .bind(this); }

  componentDidMount() {
    // this.fetchData("customers"); this.fetchData("trainings");

    this
      .props
      .getAllCustomers();
    this
      .props
      .getAllTrainers();

    console.log(this.props);

  }

  // fetchData(param) {   const path =
  // `https://customerrest.herokuapp.com/api/${param}`; fetch(path).then(response
  // => {     return response.json(); }).then(jsonResponse => {
  // this.setState({[param]: jsonResponse.content});   }); }

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
              <Route exact path="/" render={() => <h2>this is root!</h2>}/>
              <Route path="/addCustomer" component={AddCustomer}/>

            </Switch>
          </div>
        </BrowserRouter>
        {/* <CustomerTable customers={this.state.customers}/> */}

        <StrapTable customers={this.props.customers}/>

      </div>
    );
  }
}

const mapStateToProps = state => {
  return {customers: state.customer.customers, trainings: state.training.trainers};
};

const mapDispatchToProps = dispatch => {
  return {
    getAllCustomers: () => getAllCustomers(dispatch),
    getAllTrainers: () => getAllTrainers(dispatch)

  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
