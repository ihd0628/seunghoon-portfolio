import React from 'react';
import styled from 'styled-components';
import backGround from './images/IntroduceBackground.jpg';

function Introduce() {
  return (
    <IntroduceContainer>
      <Head>안녕하세요.</Head>
      <br />
      <div>
        <Name>이승훈</Name>
        <Head>입니다.</Head>
      </div>
      <br />
      <br />
      <br />
      <Description>프론트엔드 개발자를 향해 달려가는 중입니다.</Description>
      <br />
      <Description>배우고 성장하여 도움을 주는 것을 좋아합니다.</Description>
      <br />
      <Description>
        기록의 중요성을 알고 생각을 정리하여 기록하기 위해 노력합니다.
      </Description>
    </IntroduceContainer>
  );
}

const IntroduceContainer = styled.section`
  ${(props) => props.theme.variables.flex('column', 'center', 'center')}
  height: 100vh;
  position: relative;

  &::before {
    content: '';
    background-image: url(${backGround});
    background-size: cover;
    z-index: -1;
    opacity: 0.45;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const Head = styled.span`
  font-size: 65px;
  font-weight: 600;
`;

const Name = styled.span`
  font-size: 90px;
  font-weight: 900;
`;

const Description = styled.div`
  font-size: 35px;
  font-weight: 400;
`;

export default Introduce;
