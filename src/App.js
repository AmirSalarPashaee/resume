import React, { Component } from "react";
import data from "./data.json";
import "./App.css";
import ChangeColor from "./component/ChangeColor";




class App extends Component {


  render() {
    return (
      <div > 
        <ChangeColor /> 
      </div>
    );
  }
}

export default App;
