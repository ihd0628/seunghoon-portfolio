import { css } from 'styled-components';

const variables = {
  flex: (direction = 'row', justify = 'center', align = 'center') => `
    display: flex;
    flex-direction: ${direction};
    justify-content: ${justify};
    align-items: ${align};
  `,

  position: (position = 'absoulte', top = '0', left = '0') => `
  Position: ${position};
  top: ${top};
  left: ${left};
`,

  leftRatio: '23%',

  absoluteCenter: css`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
};

export default variables;
