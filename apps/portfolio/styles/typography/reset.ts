import { css } from 'styled-components';
import { padding } from '../settings/layout';
import { fontSize } from './font-size';

export const typography = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;

    :not(:last-child) {
      margin-bottom: ${padding.sm};
    }
  }

  h1,
  h2,
  h3 {
    line-height: 1.3;
  }

  * {
    line-height: 1.75;
    letter-spacing: 0.04em;
  }

  ${Object.entries(fontSize)
    .map(([key, value]) => `.fs-${key} { font-size: ${value}; }`)
    .join(';\n')}
`;
