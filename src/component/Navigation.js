import React, { Component } from "react";
import StickyHeader from "react-sticky-header";
import { Link, Element } from "react-scroll";
import Sticky from "react-stickynode";
import "./Navigation.css";
import SnowStorm from "react-snowstorm";
import ChangeColor from "./ChangeColor";
import data from "../data.json";

class Navigation extends Component {
  render() {
    return (
      <div>
        <Sticky top="#header" bottomBoundary="#content">
          <table className="header">
            <th className="header1" onClick={this.props.changeColor}>
              Color
            </th>
            <Link
              activeClass="active"
              to="bio"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              <th className="header3">About ME</th>
            </Link>

            <Link
              activeClass="active"
              to="research"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              <th className="header3">Research</th>
            </Link>

            <Link
              activeClass="active"
              to="skill"
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
              delay={0}
            >
              <th className="header3">Skills</th>
            </Link>
          </table>
        </Sticky>
      </div>
    );
  }
}

export default Navigation;
