import React from 'react';
import Education from 'components/Education';
import Introduce from 'components/Introduce';
import OtherExperiences from 'components/OtherExperiences';
import Experiences from 'components/Experiences';
import ListBar from 'components/ListBar';
import styled from 'styled-components';
import Projects from './components/Projects';

function App() {
  return (
    <>
      <ListBar />
      <MainContainer>
        <Introduce />
        <Projects />
        <Experiences />
        <OtherExperiences />
        <Education />
      </MainContainer>
    </>
  );
}

const MainContainer = styled.div`
  padding-left: 30%;
`;

export default App;
