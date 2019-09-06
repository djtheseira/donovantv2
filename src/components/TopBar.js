import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import resume from '../Donovan_Theseira_Resume.pdf';

class TopBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNavDisplay: ""
    }
  }

  goToSection = (section) => {
    if (this.state.mobileNavDisplay) {
      this.props.addBlur();
      this.setState({mobileNavDisplay: ""});
    }
    this.props.goTo(section);
  }

  handleNavStyle = () => {
    if (25 > this.props.scroll) {
      return "tall";
    } else if (150 > this.props.scroll) {
      return "short";
    } else if ( this.props.reverseScroll) {
      return "short";
    } else {
      return "off";
    }
  }

  setClassName = (id) => {
    let className = "navbar-btn";

    if (id === this.props.activeSection) {
      className += " selected-section";
    }

    return className;
  }

  openMobileMenu = () => {
    this.setState({mobileNavDisplay: this.state.mobileNavDisplay === "" ? "show" : ""});
    this.props.addBlur();
  }

  render() {
    return (
      <header className={this.handleNavStyle()} >
        <nav id="nav" >
          <div >
            <button className="navbar-btn" id="name-nav-btn" onClick={() => this.goToSection('home')} >Donovan Theseira</button>
          </div>
          <div>
            <ul id="nav-list" >
              <li ><button onClick={() => this.goToSection('about')} className={this.setClassName("about")} >About</button></li>
              <li ><button onClick={() => this.goToSection('jobs')} className={this.setClassName("jobs")} >Experience</button></li>
              <li ><button onClick={() => this.goToSection('projects')} className={this.setClassName("projects")} >My Projects</button></li>
              <li ><a href={resume} id="resume" className="navbar-btn" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFileAlt} /></a></li>
            </ul>
            {
              this.state.mobileNavDisplay === "" && <button id="hamburger" onClick={() => this.openMobileMenu()} ><FontAwesomeIcon icon={faBars} size="2x" /></button>
            }
            {
              this.state.mobileNavDisplay === "show" && <button id="hamburger-close" onClick={() => this.openMobileMenu()} ><FontAwesomeIcon icon={faTimes} size="2x" /></button>
            }
           </div>
        </nav>
        <div id="mobile-menu" className={this.state.mobileNavDisplay} >
          <div id="hamburger-menu" >
            <ul>
              <li ><button onClick={() => this.goToSection('about')} className={this.setClassName("about")} >About</button></li>
              <li ><button onClick={() => this.goToSection('jobs')} className={this.setClassName("jobs")} >Experience</button></li>
              <li ><button onClick={() => this.goToSection('projects')} className={this.setClassName("projects")} >My Projects</button></li>
              <li ><a href={resume} id="mobile-resume" className="navbar-btn" target="_blank" rel="noopener noreferrer" >Resume</a></li>            
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default TopBar;