import React from 'react';
import styled from 'styled-components';

function ListBar() {
  return <Body>ListBar</Body>;
}

const Body = styled.div`
  position: absolute;
  width: 30%;
  height: 100%;
  background-color: black;
`;

// const DetailContainer = styled.div`
//   ${props => props.theme.variables.flex('row', 'flex-start', '')}
// `;

export default ListBar;
