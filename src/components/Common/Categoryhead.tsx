import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  headMessage: string;
}

function Categoryhead({ headMessage }: PropsTypes) {
  return <Head>{headMessage}</Head>;
}

const Head = styled.h1`
  margin-bottom: 60px;
  font-size: 100px;
  font-weight: 800;
  text-decoration: underline;
  text-underline-position: under;
`;

export default Categoryhead;
