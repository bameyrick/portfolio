import { FlattenSimpleInterpolation, css } from 'styled-components';

interface BreakpointOptions {
  breakpoint: number;
  direction: 'above' | 'below';
  dimension: 'width' | 'height';
}

const defaultOptions: BreakpointOptions = {
  breakpoint: 0,
  direction: 'above',
  dimension: 'width',
};

export function mediaQuery(
  styles: FlattenSimpleInterpolation,
  options: Partial<BreakpointOptions> & Pick<BreakpointOptions, 'breakpoint'>
): FlattenSimpleInterpolation {
  let { breakpoint, direction, dimension } = { ...defaultOptions, ...options };

  if (direction === 'below') {
    breakpoint -= 1;
  }

  if (direction === 'above') {
    if (dimension === 'width') {
      return css`
        @media (min-width: ${breakpoint}px) {
          ${styles}
        }
      `;
    } else {
      return css`
        @media (min-height: ${breakpoint}px) {
          ${styles}
        }
      `;
    }
  } else {
    if (dimension === 'width') {
      return css`
        @media (max-width: ${breakpoint}px) {
          ${styles}
        }
      `;
    } else {
      return css`
        @media (max-height: ${breakpoint}px) {
          ${styles}
        }
      `;
    }
  }
}
