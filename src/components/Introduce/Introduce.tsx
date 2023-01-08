import React from 'react';
import styled from 'styled-components';
import backGround from './images/IntroduceBackground.jpg';

function Introduce() {
  return (
    <IntroduceContainer>
      <Head>프론트 엔드 개발자 이승훈</Head>
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
    opacity: 0.5;
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
  }
`;

const Head = styled.h1`
  font-size: 65px;
  font-weight: 900;
`;

export default Introduce;
