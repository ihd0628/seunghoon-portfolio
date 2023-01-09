import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  responsibleFunction: Array<string>;
}

function ResponsibleFunction({ responsibleFunction }: PropsTypes) {
  return (
    <ResponsibleFunctionContainer>
      {responsibleFunction.map((responsibleFunction) => {
        return <li key={responsibleFunction}>{responsibleFunction}</li>;
      })}
    </ResponsibleFunctionContainer>
  );
}

const ResponsibleFunctionContainer = styled.ul`
  font-size: 35px;
`;

export default ResponsibleFunction;
