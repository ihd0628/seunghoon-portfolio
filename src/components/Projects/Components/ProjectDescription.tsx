import React from 'react';
import styled from 'styled-components';

function ProjectDescription() {
  return (
    <ProjectDescriptionContainer>
      <ProjectName>프로젝트 명</ProjectName>
      <Period>프로젝트 기간</Period>
      <Skills>기술 스택</Skills>
      <Achievements>성과 및 배운점</Achievements>
    </ProjectDescriptionContainer>
  );
}

const ProjectDescriptionContainer = styled.div``;
const ProjectName = styled.div``;
const Period = styled.div``;
const Skills = styled.ul``;
const Achievements = styled.ul``;

export default ProjectDescription;
