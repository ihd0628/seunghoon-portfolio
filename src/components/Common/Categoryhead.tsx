import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  headMessage: string;
}

function Categoryhead({ headMessage }: PropsTypes) {
  return <Head>{headMessage}</Head>;
}

const Head = styled.h1`
  font-size: 50px;
`;

export default Categoryhead;
