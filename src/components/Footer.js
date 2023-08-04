import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn, faGithub, faFacebookF, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';

class Footer extends React.Component {
  render() {
    return  (
      <footer>
        <div id="footer-socials" >
          <ul id="footer-social-list" >
            <li><a href="https://www.linkedin.com/in/djtheseira/" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedinIn} size="lg" /></a></li>
            <li><a href="https://github.com/djtheseira" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} size="lg" /></a></li>
            <li><a href="https://www.facebook.com/donovanjt" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faFacebookF} size="lg" /></a></li>
            <li><a href="https://www.instagram.com/donwoncrouton" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faInstagram} size="lg" /></a></li>
            <li><a href="https://www.soundcloud.com/iamcrouton" target="_blank" rel="noopener noreferrer" ><FontAwesomeIcon icon={faSoundcloud} size="lg" /></a></li>
          </ul>
        </div>
        <div >Created by Donovan T. &copy; 2023 </div>
      </footer>
    );
  }
}

export default Footer;