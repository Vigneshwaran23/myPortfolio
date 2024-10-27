import React from 'react';
import './App.css';
import Header from './Header';
import Profile from './Profile';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Contact from './Contact';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Profile />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
};

export default App;
