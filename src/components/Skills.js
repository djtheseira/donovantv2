import React from "react";
import profile from '../profile';
import Skill from './Skill';

class Skills extends React.Component {
  render() {
    return (
      <div id="skills" >
        <span id="skills-title" >My current skillset:</span>
        {
          Object.keys(profile.skills).map((key) => {
            return <Skill key={key} skill={key} />;
          })
        }
      </div>
    )
  }
}

export default Skills;
