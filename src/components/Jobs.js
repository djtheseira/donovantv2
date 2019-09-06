import React from 'react';
import profile from '../profile';
import Job from './Job';

class Jobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeJob: 0
    }
  }

  renderCompanyItem = (name, idx) => {
    let className = "job-option";
    className += (this.state.activeJob === idx) ? " selected-job" : "";
    
    return <li key={name.toLowerCase()} ><button id={name.toLowerCase()} className={className} onClick={() => this.changeJob(idx)}><span >{name}</span></button></li>;
  }

  changeJob = (idx) => {
    this.setState({activeJob: idx});
  }

  renderJob = (job, idx) => {
    return <Job job={job} activeJob={this.state.activeJob === idx} idx={idx} key={job.key} />;
  }

  render() {
    return (
      <section id="experience-section" ref={this.props.innerRef} >
        <h4>{profile.headers.experience}</h4>
        <div id="jobs-container">
          <ul id="jobs-list" >
            {
              profile.company.map((name, idx) => {
                return this.renderCompanyItem(name, idx);
              })
            }
          </ul>
          <div id="jobs-details-container">
            {
              profile.job.map((job, idx) => {
                return this.renderJob(job, idx);
              })
            }
          </div>
        </div>
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => <Jobs innerRef={ref} {...props} />);