import React, { Component } from "react";
import StickyHeader from "react-sticky-header";
import { Link, Element } from "react-scroll";
import Sticky from "react-stickynode";
import "./Navigation.css";
import SnowStorm from "react-snowstorm";
import ChangeColor from "./ChangeColor";
import data from "../data.json";


class Navigation extends Component {

  transfer() {
    this.changeColor.handleScroll();
  }

  render() {
    return (
      <div>
        <Sticky top="#header" bottomBoundary="#content">
          <table className="header">
            <th className="header1" onClick={this.transfer.bind(this)}>
            Color
            </th>
            {console.log(data.God[0])}
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
              <th className="header3" >
                Research
              </th>
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
              <th className="header3" onClick={() => console.log("salam")}>
                Skills
              </th>
            </Link>
          </table>
        </Sticky>
        <ChangeColor
          ref={changeColor => (this.changeColor = changeColor)}
          className="widths"
        />
      </div>
    );
  }
}

export default Navigation;
