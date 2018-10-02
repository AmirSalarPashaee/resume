import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import { changeExt } from "upath";
import "./FullStack.css";


class ChangeColor extends Component {
      constructor(){
      super()
    this.states=0;
    this.handleScroll = this.handleScroll.bind(this);
    this.state={
        backgroundColor:"black",
        color:"white"

    }
    
    console.log(Element.style)

}
handleScroll(){
    this.setState({
        backgroundColor: this.state.backgroundColor === "blue" ? 'black' : "blue",
        color: this.state.color === "white" ? 'yellow' : "white"

    })

}
    

  render() {
    const { children } = this.props;
    console.log( {backgroundColor:this.state.backgroundColor, color:this.state.color})
    return (

      <div style={{backgroundColor:this.state.backgroundColor, color:this.state.color}}   >
        {children } 
        <SnowStorm />
      </div>
    );
  }
}
const Change= new ChangeColor()
export default  ChangeColor;
