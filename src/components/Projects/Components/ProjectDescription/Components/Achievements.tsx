import React from 'react';
import styled from 'styled-components';

interface PropsTypes {
  achievments: Array<string>;
}

function Achievements({ achievments }: PropsTypes) {
  return (
    <AchievementsContainer>
      {achievments.map((achievment) => {
        return <li key={achievment}>{achievment}</li>;
      })}
    </AchievementsContainer>
  );
}

const AchievementsContainer = styled.ul`
  font-size: 35px;
`;

export default Achievements;
