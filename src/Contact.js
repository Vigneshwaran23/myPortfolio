import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons';
import { ReactComponent as LinkedInIcon } from './assets/linkedin.svg';
import './Contact.css';

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <div className="contact-item">
      <FontAwesomeIcon icon={faPhone} /> <span>(+91)9789396925</span>
    </div>
    <div className="contact-item">
      <FontAwesomeIcon icon={faEnvelope} /> <span>svigneshwaran23@gmail.com</span>
    </div>
    <div className="contact-item">
      <LinkedInIcon className="icon" /> <a href="https://www.linkedin.com/in/vigneshwaran-sakthi-ganesh-501831253" target="_blank" rel="noopener noreferrer">LinkedIn Profile</a>
    </div>
  </section>
);

export default Contact;
