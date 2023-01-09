import Categoryhead from 'Components/Common/Categoryhead';
import React from 'react';
import styled from 'styled-components';
import ProjectDescription from './Components/ProjectDescription/ProjectDescription';

function Projects() {
  return (
    <ProcjectsContainer>
      <Categoryhead headMessage="Projects" />
      <ProjectDescription />
    </ProcjectsContainer>
  );
}

const ProcjectsContainer = styled.div`
  background-color: white;
`;

export default Projects;
