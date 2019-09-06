import React from 'react';
import profile from '../profile';
import ProjectCard from './ProjectCard';

class Project extends React.Component {
  renderProjectCard = (project) => {
    return <ProjectCard project={project} key={project.key} />
  }
  
  render() {
    return (
      <section id="projects-section" ref={this.props.innerRef} >
        <h4>{profile.headers.projects}</h4>
        <div id="projects-container" >
          {
            profile.projects.map((project) => {
              return this.renderProjectCard(project);
            })
          }
        </div>
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => <Project innerRef={ref} {...props} />);