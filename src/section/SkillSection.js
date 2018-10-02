import React, { Component } from "react";
import data from "../data.json";
import { SocialIcon } from "react-social-icons";
import ReactDOM from "react-dom";
import "./SkillSection.css";
import FullStack from "../component/FullStack";
import SkillCard from "../component/SkillCard";
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from "react-scroll";

class SkillSection extends Component {
  render() {
    return (
      <FullStack className="fulspage">
        <div className="titless">{data.section[2].title}</div>
        <div className="skill">
          {data.section[2].items.map(eachSkill => {
            return <SkillCard skill={eachSkill} />;
          })}
        </div>

      </FullStack>
      
    );
  }
}

export default SkillSection;
