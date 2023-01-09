import React from 'react';
import Education from 'Components/Education/Education';
import Introduce from 'Components/Introduce/Introduce';
import OtherExperiences from 'Components/OtherExperiences/OtherExperiences';
import Experiences from 'Components/Experiences/Experiences';
import ListBar from 'Components/ListBar/ListBar';
import styled from 'styled-components';
import Projects from './Components/Projects/Projects';

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
  padding-left: ${(props) => props.theme.variables.leftRatio};
`;

export default App;
