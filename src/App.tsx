import React from 'react';
import Education from 'components/Education';
import Introduce from 'components/Introduce';
import OtherExperiences from 'components/OtherExperiences';
import Experiences from 'components/Experiences';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <Introduce />
      <Projects />
      <Experiences />
      <OtherExperiences />
      <Education />
    </>
  );
}

export default App;
