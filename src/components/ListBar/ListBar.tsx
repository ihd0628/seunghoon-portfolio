import React from 'react';
import styled from 'styled-components';
import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaBlog } from '@react-icons/all-files/fa/FaBlog';
import { SiNotion } from '@react-icons/all-files/si/SiNotion';
import { FiMail } from '@react-icons/all-files/fi/FiMail';

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
        <Icon>
          <AiFillGithub size={23} />
        </Icon>
        <Icon>
          <FaBlog size={23} />
        </Icon>
        <Icon>
          <SiNotion size={23} />
        </Icon>
        <Icon>
          <FiMail size={23} />
        </Icon>
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
  ${(props) => props.theme.variables.flex('row', 'space-between', '')}
  margin-bottom: 40px;
  width: 70%;
`;

const Icon = styled.li`
  margin: 0 15px;
`;

// const DetailContainer = styled.div`
//   ${props => props.theme.variables.flex('row', 'flex-start', '')}
// `;

export default ListBar;
