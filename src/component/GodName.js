import React, { Component } from "react";


class GodLogo extends Component {
  render() {
    const { skill } = this.props;
    return (
        <div>
            <img src={skill.content.image} />
        </div>
    );
  }
}

export default GodLogo;
