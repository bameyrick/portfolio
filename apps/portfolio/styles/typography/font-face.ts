import { css } from 'styled-components';

export const FONT_NAME = 'GT Walsheim';

export const fontFace = css`
  @font-face {
    font-family: ${FONT_NAME};
    src: url('/fonts/gt-walsheim.woff2');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: ${FONT_NAME};
    src: url('/fonts/gt-walsheim-medium.woff2');
    font-weight: bold;
    font-style: normal;
  }
`;
