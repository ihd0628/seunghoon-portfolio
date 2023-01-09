import React from 'react';
import styled from 'styled-components';
import Achievements from './Components/Achievements';
import Period from './Components/Period';
import ResponsibleFunction from './Components/ResponsibleFunction';
import Skills from './Components/Skills';

const projectData = {
  projectName: 'CLASS IOI',
  period: ['2022.10.03 - 2022.10.14', '2022.12.19 - 2022.12.23'],
  skills: ['React', 'Styled-components'],
  responsiblaFunction: [
    'fetch API 를 이용한 클래스 개설 및 수정',
    'mediaDevice API를 이용한 강의 촬영 및 등록 ',
    '등록한 강의 재생',
  ],
  achievments: [
    '이미지 CDN을 사용하여 이미지 최적화를 경험하였습니다. 이를 통해 Total Blocking Time을 1100ms 단축 하였습니다.',
    '코드스플리팅(React.lazy 사용)을 통해 번들링 사이즈를 분할, 이를 통해 javascript loading time을 250ms 단축 하였습니다.',
    'Performance Insights를 사용하여 렌더링 과정을 분석 후 누적 레이아웃 변경 최적화를 통해 CLS를 개선 하였습니다.',
    '상기 성과를 포함한 기타 개선 사항을 적용하여 라이트 하우스 Performance Score를 38점 → 94점 으로 개선한 경험을 하였습니다. 또한 이를 통해 단순히 기능을 구현하는것만이 아닌 유저에게 쾌적한 경험을 제공하는 것이 중요 하다는 점을 배웠습니다.',
  ],
  github: 'https://github.com/ihd0628/class101-refactor',
  youtube: 'https://www.youtube.com/watch?v=ggKWn5Ho6kc',
  posting: {
    name: '성능 최적화 기록 링크',
    url: 'https://velog.io/@hoon0123/%EC%84%B1%EB%8A%A5-%EC%B5%9C%EC%A0%81%ED%99%94%EB%A5%BC-%EC%9C%84%ED%95%9C-%EB%85%B8%EB%A0%A5%EB%93%A4-2',
  },
};

function ProjectDescription() {
  return (
    <ProjectDescriptionContainer>
      <ProjectName>{projectData.projectName}</ProjectName>
      <Period period={projectData.period} />
      <Skills skills={projectData.skills} />
      <ResponsibleFunction
        responsibleFunction={projectData.responsiblaFunction}
      />
      <Achievements achievments={projectData.achievments} />
    </ProjectDescriptionContainer>
  );
}

const ProjectDescriptionContainer = styled.div``;
const ProjectName = styled.div`
  font-size: 55px;
`;

export default ProjectDescription;
