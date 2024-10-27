import React from 'react';
import './LinkedInPage.css';

const LinkedInPage = ({ profileData }) => {
  const { profile, experience, education, skills } = profileData;

  return (
    <div className="linkedin-page">
      <Header />
      <Profile profile={profile} />
      <Experience experience={experience} />
      <Education education={education} />
      <Skills skills={skills} />
      <Contact />
    </div>
  );
};

const Header = () => (
  <header>
    <h1>LinkedIn Profile</h1>
    <nav>
      <a href="#profile">Profile</a>
      <a href="#experience">Experience</a>
      <a href="#education">Education</a>
      <a href="#skills">Skills</a>
      <a href="#contact">Contact</a>
    </nav>
  </header>
);

const Profile = ({ profile }) => (
  <section id="profile">
    <h2>Profile</h2>
    <p>{profile}</p>
  </section>
);

const Experience = ({ experience }) => (
  <section id="experience">
    <h2>Experience</h2>
    {experience.map((item, index) => (
      <div className="experience-item" key={index}>
        <p>{item}</p>
      </div>
    ))}
  </section>
);

const Education = ({ education }) => (
  <section id="education">
    <h2>Education</h2>
    {education.map((item, index) => (
      <div className="education-item" key={index}>
        <p>{item}</p>
      </div>
    ))}
  </section>
);

const Skills = ({ skills }) => (
  <section id="skills">
    <h2>Skills</h2>
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  </section>
);

const Contact = () => (
  <section id="contact">
    <h2>Contact</h2>
    <p>Include your contact details or links to your social profiles.</p>
  </section>
);

export default LinkedInPage;
