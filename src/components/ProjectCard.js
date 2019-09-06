import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';

class ProjectCard extends React.Component {
  renderProjectTool = (tool, idx) => {
    return <li className="project-tool" key={idx} >{tool}</li>;
  }

  renderUrl = (url) => {
    if (url) {
      return <a href={url} className="project-url" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faShare} /></a>;
    }
    return "";
  }

  render() {
    let project = this.props.project;
    let title = project.title;
    let githubUrl = project.githubUrl;
    let url = project.url;
    let description = project.description; 
    let tools = project.tools;
    
    return (
      <div className="project" >
        <div className="project-info">
          <div className="project-header" >
            <span className="project-title">{title}</span>
            <div className="project-icons" >
              <a href={githubUrl} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} /></a>
              { this.renderUrl(url) }
            </div>
          </div>
          <p className="project-description" >{description}</p>
        </div>
        <div className="project-footer">
          <ul className="project-tools">
            {
              tools.map((tool, idx) => {
                return this.renderProjectTool(tool, idx);
              })
            }
          </ul>
        </div>
      </div>
    );
  }
}

export default ProjectCard;