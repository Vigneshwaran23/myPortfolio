import React from 'react';
import './Header.css';

const Header = () => (
  <header className="Header">
     <div className="skills-box">
    <h1>Vigneshwaran Sakthi Ganesh</h1>
    <p className="skills-header">HTML | CSS | JavaScript | Responsive Design | UI/UX | Frontend
      Frameworks | Web Accessibility | Cross-Browser Compatibility |
      Angular | React Js | JQuery | AEM | CI/CD | SQL</p>
      </div>
    <nav>
      <a href="#profile">Profile</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

export default Header;
