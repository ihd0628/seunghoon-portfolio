import Categoryhead from 'Components/Common/Categoryhead';
import React from 'react';
import styled from 'styled-components';

function Projects() {
  return (
    <ProcjectsContainer>
      <Categoryhead headMessage="Projects" />
    </ProcjectsContainer>
  );
}

const ProcjectsContainer = styled.div`
  background-color: white;
`;

export default Projects;
