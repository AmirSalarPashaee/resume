import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import { changeExt } from "upath";
import "./FullStack.css";


class FullStack extends Component {
      constructor(){
      super()
    this.states=0;
    this.state={
      color:"blue"
    }
}

  render() {
    const { children } = this.props;

    return (
      <div className={` ${this.props.className || ""} ${console.log(this.state)}`} >

        {children}
      </div>
    );
  }
}

export default FullStack;
