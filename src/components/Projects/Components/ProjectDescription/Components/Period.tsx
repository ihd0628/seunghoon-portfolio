import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  period: Array<string>;
}

function Period({ period }: PropsTypes) {
  return (
    <PeriodContainer>
      {period.map((period, index) => {
        return (
          <li key={period}>
            {index + 1}차 기간 : {period}
          </li>
        );
      })}
    </PeriodContainer>
  );
}

const PeriodContainer = styled.ul`
  font-size: 30px;
`;

export default Period;
