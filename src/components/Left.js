import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

class Left extends React.Component {
  render() {
    return (
      <div id="left-side-socials" >
        <ul id="social-list" >
          <li><a href="https://www.linkedin.com/in/djtheseira/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
          <li><a href="https://github.com/djtheseira" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} /></a></li>
          <li><a href="https://www.facebook.com/donovanjt" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebookF} /></a></li>
          <li><a href="https://www.instagram.com/donwoncrouton" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram} /></a></li>
          <li><a href="https://www.soundcloud.com/iamcrouton" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faSoundcloud} /></a></li>
        </ul>
      </div>
    );
  }
}

export default Left;