import React from 'react';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.scrollTo = this.scrollTo.bind(this);
  }

  scrollTo = () => {
    this.sectionRef.current.scrollIntoView({behavior: 'smooth', block: 'end'});
    console.log(this.sectionRef);
  }

  render() {
    return (
      <section id="home" ref={this.props.innerRef} >
        <div className="main-landing text-center" >
          <h1 id="intro" >Hello, my name is</h1>
          <div id="my-name-container"><h2 id="my-name" >Donovan Theseira</h2></div>
          <h3 id="intro-summary" >
            I am a software developer. A man of many (self-proclaimed) talents, who views every new project like a puzzle, a puzzle with unlimited pieces and unlimited ways to finding the solution. 
            Each solution brings unique methods to learn and use in the future.
          </h3>
        </div>
      </section>
    );
  }
}

export default React.forwardRef((props, ref) => <Home innerRef={ref} {...props} />);