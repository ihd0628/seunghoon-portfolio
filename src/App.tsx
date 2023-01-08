import React from 'react';
import Education from 'components/Education/Education';
import Introduce from 'components/Introduce/Introduce';
import OtherExperiences from 'components/OtherExperiences/OtherExperiences';
import Experiences from 'components/Experiences/Experiences';
import ListBar from 'components/ListBar/ListBar';
import styled from 'styled-components';
import Projects from './components/Projects/Projects';

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
