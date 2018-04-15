import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MainTable from "./Components/MainTable";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      customers: null,
      trainings : null,
    }
    // This binding is necessary to make `this` work in the callback
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    this.fetchData('customers')
    this.fetchData('trainings')
  }

  fetchData(param) {
    const path = `https://customerrest.herokuapp.com/api/${param}`;

    fetch(path)
      .then(response => {
        return response.json();
      })
      .then(jsonResponse => {
        this.setState({
          [param]: jsonResponse.content
        });
      });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {/* <MainTable customers={this.state.customers}/> */}
      </div>
    );
  }
}

export default App;
