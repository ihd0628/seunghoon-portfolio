import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  skills: Array<string>;
}

function Skills({ skills }: PropsTypes) {
  return (
    <SkillsContainer>
      {skills.map((skill) => {
        return <li key={skill}>{skill}</li>;
      })}
    </SkillsContainer>
  );
}

const SkillsContainer = styled.ul`
  font-size: 30px;
`;

export default Skills;
