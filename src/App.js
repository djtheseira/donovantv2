import React, {Component } from 'react';
import './main.css';
import TopBar from './components/TopBar';
import Home from './components/Home';
import Footer from './components/Footer';
import Left from './components/Left';
import Right from './components/Right';
import About from './components/About';
import Jobs from './components/Jobs';
import Projects from './components/Projects';

class App extends Component {  
  constructor(props) {
    super(props);
    this.home = React.createRef();
    this.about = React.createRef();
    this.jobs = React.createRef();
    this.projects = React.createRef();
    this.state = {
      activeSection: "home",
      currentScroll: 0,
      reverseScroll: false,
      blurClass: "",
      isMobile: window.innerWidth < 768
    }
    this.scrollToContent = this.scrollToContent.bind(this);
  }

  scrollToContent(content) {
    switch(content) {
      case 'home':
        // this.home.current.scrollTo();
        this.home.current.scrollIntoView({behavior: 'smooth', block: (this.state.isMobile ? 'start' : 'end')});
        break;
      case 'about':
        this.about.current.scrollIntoView({behavior: 'smooth', block: (this.state.isMobile ? 'start' : 'center')});
        break;
      case 'jobs':
        this.jobs.current.scrollIntoView({behavior: 'smooth', block: (this.state.isMobile ? 'start' : 'center')});
        break;
      case 'projects':
        this.projects.current.scrollIntoView({behavior: 'smooth', block: (this.state.isMobile ? 'start' : 'center')});
        break;
      default:
        this.about.current.scrollIntoView({behavior: 'smooth', block: (this.state.isMobile ? 'start' : 'end')});
        break;
    }
  }

  handleScroll = (e) => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    this.setState({
      reverseScroll: (this.state.currentScroll > winScroll),
      currentScroll: winScroll
    });

    if((this.home.current.offsetTop + this.home.current.clientHeight) > winScroll ) {
      this.setState({activeSection: "home"});
    } else if((this.about.current.offsetTop + this.about.current.clientHeight) > winScroll) {
      this.setState({activeSection: "about"});
    } else if((this.jobs.current.offsetTop + this.jobs.current.clientHeight) > winScroll) {
      this.setState({activeSection: "jobs"});
    } else if((this.projects.current.offsetTop + this.projects.current.clientHeight) > winScroll) {
      this.setState({activeSection: "projects"});
    }
  }

  addBlur = () => {
    this.setState({blurClass: this.state.blurClass === "" ? "blur" : ""});
  }

  handleWindowSizeChange = () => {
    this.setState({isMobile: window.innerWidth < 768 });
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    window.addEventListener('resize', this.handleWindowSizeChange);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
    window.removeEventListener('resize', this.handleWindowSizeChange);
  }

  render() {
    return (
      <div className="App">
        <div id="root" className={this.state.blurClass} >
          <div id="container" >
            <TopBar scroll={this.state.currentScroll} addBlur={this.addBlur} reverseScroll={this.state.reverseScroll} activeSection={this.state.activeSection} goTo={this.scrollToContent} />
            <Left />
            <div id="main-section" >
              <Home ref={this.home} />
              <About ref={this.about} />
              <Jobs ref={this.jobs} />
              <Projects ref={this.projects} />
            </div>
            <Right />
            <Footer />
          </div>
        </div>      
      </div>
    )
  }
}

export default App;
