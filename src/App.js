import React, { Component } from "react";
import data from "./data.json";
import logo from "./logo.svg";
import { SocialIcon } from "react-social-icons";
import ReactDOM from "react-dom";
import "./App.css";
import TitleSection from "./section/TitleSection";
import BioSection from "./section/BioSection";
import Research from "./section/Research";
import SkillSection from "./section/SkillSection";
import Navigation from "./component/Navigation";
import ChangeColor from "./component/ChangeColor";


import { Link, Element } from "react-scroll";
import Sticky from 'react-stickynode';
import ResearchSection from "./section/Research";



class App extends Component {


  render() {
    return (
      <div > 
        <ChangeColor > 
        <Navigation />
        <TitleSection />
        <BioSection   />
        <ResearchSection />
        <SkillSection />
        </ChangeColor>

      </div>
    );
  }
}

export default App;
