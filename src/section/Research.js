import React, { Component } from "react";
import data from "../data.json";
import "./Research.css";
import FullStack from "../component/FullStack";

import {
  Link,
  Element,
} from "react-scroll";
import DownIcon from "../component/DownIcons";

class ResearchSection extends Component {
  render() {
    return (
      <FullStack className="template fullpage">
        <div className="titles">{data.section[1].title}</div>
        <div className="content" >
            {data.section[1].items.map(i => 
                {return   <div>
                        <h2>{i.title}</h2>
                        <p>{i.content}</p> 
                     </div>;  }
                )}
        </div>
          
          
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          offset={50}
          duration={500}
          delay={0}
        >
                  <p>. </p>
                  <p>. </p>

          <DownIcon
            icon={data.icons.down}
          />
        </Link>
        <Element name="skills" className="element" />
      </FullStack>

    );
  }
}

export default ResearchSection;
