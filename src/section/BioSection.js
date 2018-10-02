import React, { Component } from "react";
import data from "../data.json";
import "./BioSection.css";
import FullStack from "../component/FullStack";

import {
  Link,
  Element,
} from "react-scroll";
import DownIcon from "../component/DownIcons";

class BioSection extends Component {
  render() {
    return (
      <FullStack className="templates fullsspage">
        <div className="title">{data.section[0].title}</div>
        <div className="contents">
          {data.section[0].items[0].content.split("\n").map(i => {
            return <p>{i}</p>;
          })}
        </div>


        <Link
          activeClass="active"
          to="research"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
            onClick={() => console.log("I'm working")}
          />
        </Link>
        <Element name="research" className="element" />
      </FullStack>
    );
  }
}

export default BioSection;
