import React, { Component } from "react";
import SnowStorm from "react-snowstorm";
import ReactDOM from "react-dom";
import { changeExt } from "upath";
import "./FullStack.css";
import SkillSection from "../section/SkillSection";
import TitleSection from "../section/TitleSection";
import BioSection from "../section/BioSection";
import ResearchSection from "../section/Research";
import Navigation from "../component/Navigation";

class ChangeColor extends Component {
  constructor() {
    super();
    this.handleScroll = this.handleScroll.bind(this);
    this.state = {
      backgroundColor: "black",
      color: "white",
      states: 2,
      snow: <SnowStorm  default = 'true' />
    };
  }

  handleScroll = () => {
    switch (this.state.states) {
      case 1: {
        this.setState({
          states: this.state.states + 1,
          backgroundColor: "black",
          color: "white",
          snow: 0
        });
        console.log("one");
        break;
      }
      case 2: {
        this.setState({
          states: this.state.states + 1,
          backgroundColor: "lightblue",
          color: "black",
          snow: <SnowStorm />
        });
        console.log("two");
        break;
      }
      case 3: {
        this.setState({
          states: this.state.states + 1,
          backgroundColor: "maroon",
          color: "black",
          snow: <SnowStorm />
        });
        console.log("three");
        break;
      }
      case 4: {
        this.setState({
          states: 1,
          backgroundColor: "green",
          color: "black",
          snow: <SnowStorm />
        });
        console.log("four");
        break;
      }
      default: {
        this.setState({
          states: 1
        });
        console.log(this.state.states);
        break;
      }
    }
    console.log(this.state.states);
    //    console.log("hihellohi")
  };

  render() {
    const { children } = this.props;

    return (
      <div
        style={{
          backgroundColor: this.state.backgroundColor,
          color: this.state.color
        }}
      >
        {children}
        <Navigation changeColor={this.handleScroll} />
        <TitleSection />
        {this.state.snow}
        <BioSection />
        <ResearchSection />
        <SkillSection />
      </div>
    );
  }
}
const Change = new ChangeColor();
export default ChangeColor;
