import React, {Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import StrapTable from "./Components/BootstrapTable";
import NavDrawer from "./Components/Drawer";

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
        {/* <CustomerTable customers={this.state.customers}/> */}
        <StrapTable customers={this.state.customers}/>
        <NavDrawer/>
      </div>
    );
  }
}

export default App;
