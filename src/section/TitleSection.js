import React, { Component } from "react";
import data from "../data.json";
import {
  Link,
  Element
} from "react-scroll";
import { SocialIcon } from "react-social-icons";
import GodLogo from "../component/GodName";
import DownIcon from "../component/DownIcons";
import FullStack from "../component/FullStack";
import SnowStorm from "react-snowstorm";


import "./TitleSection.css";


class TitleSection extends Component {
  render() {
    return (
      <div>
        {this.props.sn}
        <FullStack className="justify ">
          {data.God.map(eachSkill => {
            return <GodLogo skill={eachSkill} />;
          })}
        </FullStack>
          <FullStack className="fullspage sectionTitle first"  >
          <div>
            <h1>{data.title} </h1>
            <h2>{data.subtitle}</h2>
          </div>
          <div>
            {Object.keys(data.links).map(key => {
              return <SocialIcon url={data.links[key]} />;
            })}
          </div>
        </FullStack>

        <Link
          activeClass="active"
          to="bio"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
          <DownIcon
            icon={data.icons.down}
          />
        </Link>
        <Element name="bio" className="element" />
      </div>
    );
  }
}

export default TitleSection;
