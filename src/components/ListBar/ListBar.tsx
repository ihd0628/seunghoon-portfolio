import React from 'react';
import styled from 'styled-components';

function ListBar() {
  return (
    <Body>
      <ListContainer>
        <li>Introduce</li>
        <li>Projects</li>
        <li>Experiences</li>
        <li>OtherExperiences</li>
        <li>Education</li>
      </ListContainer>
      <ContactContainer>
        <li>깃헙</li>
        <li>블로그</li>
        <li>노션</li>
        <li>메일</li>
      </ContactContainer>
    </Body>
  );
}

const Body = styled.div`
  ${(props) => props.theme.variables.flex('column', 'space-between', 'center')}
  position: fixed;
  width: ${(props) => props.theme.variables.leftRatio};
  height: 100%;
  color: white;
  background-color: black;
`;

const ListContainer = styled.ul`
  ${(props) => props.theme.variables.flex('column', 'space-around', '')}
  margin-top: 30px;
  height: 600px;
  font-size: 25px;
`;

const ContactContainer = styled.ul`
  ${(props) => props.theme.variables.flex('row', 'space-around', '')}
  margin-bottom: 40px;
  width: 50%;
`;

// const DetailContainer = styled.div`
//   ${props => props.theme.variables.flex('row', 'flex-start', '')}
// `;

export default ListBar;
