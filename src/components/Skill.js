import React from 'react';
import profile from '../profile';

class Skill extends React.Component {
  createSkillList = (key) => {
    return <span>{key.replace("_", " ")}: <span className="tech-list" >{profile.skills[key]}</span></span>
  }

  render() {
    return (
      <div >
        {this.createSkillList(this.props.skill)}
      </div>
    );
  }
}

export default Skill;