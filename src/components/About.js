import React from 'react';
import profile from '../profile';
import profileImg from '../donovan.jpg';
import Skills from './Skills';

class About extends React.Component {

  render() {
    return (
      <section id="whoami-section" ref={this.props.innerRef} >
        <h4>{profile.headers.about}</h4>
        <div id="about-container" >
          <div id="about-content">
            <p className="whoami-summary" >
              During my free time, I enjoy producing electronic music, primarily focused on 
              bass music, and I attend as many concerts and music festivals that I can. 
              When the temperatures drop, I'll head up to the mountains of California 
              and enjoy the fresh powder whenever I get the chance. When I'm not 
              busy snowboarding or making music, I'm either cleaning my <span className="blue-text" >WRX</span> or going 
              for a nice drive around the city. But the most important thing about me 
              is what has now become infused with my blood, cold brew coffee!
            </p>
            <br/>
            <div className="school-text" >California State Polytechnic University, Pomona</div>
            <div className="school-text" >Bachelor of Science, Computer Information Systems - June 2016</div>
            <br/>
            <Skills />
          </div>
          <div id="about-image"><img src={profileImg} id="comp-img" alt="Donovan Theseira with NASA Shirt" /></div>
        </div>
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => <About innerRef={ref} {...props} />);