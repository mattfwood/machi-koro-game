import { css } from 'reakit';
import defaultTheme from 'reakit-theme-default';

// const theme = {
//   ...defaultTheme,

//   Button: css`
//     ${defaultTheme.Button};
//     color: red;
//   `,
// };

const theme = {
  ...defaultTheme,

  palette: {
    ...defaultTheme.palette,
    primary: ['darkblue', 'blue', 'lightblue'],
  },

  Card: css`
    ${defaultTheme.Card};
    margin: 5px;
    border: 1px solid #dadada;
    border-radius: 8px;
  `,
};

export default theme;
