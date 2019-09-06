import React from 'react';

class Job extends React.Component {
  renderResponsibility = (responsibility, idx) => {
    return <li key={idx} >{responsibility}</li>
  }

  getClassName = () => {
    let className = "job-detail";
    className += this.props.activeJob ? " selected-job-detail" : "";
    return className;
  }

  render() {
    let job = this.props.job;
    let companyName = job.company;
    let id = job.key + "-detail";
    let title = job.title;

    return (
      <div id={id} className={this.getClassName()} >
        <div className="job-position" >{title}<span className="company-name" > @ {companyName}</span></div>
        <ul className="job-duties" >
          {
            job.responsibility.map((responsibility, idx) => {
              return this.renderResponsibility(responsibility, idx);
            })
          }
        </ul>
      </div>
    );
  }
}

export default Job;