'use client';

import { mediaQuery } from '@/styles/helpers/breakpoint';
import { breakpoint, maxWidth as defaultMaxWidth, padding } from '@/styles/settings/layout';
import { isNullOrUndefined } from '@qntm-code/utils';
import styled, { css } from 'styled-components';

interface StyledWidthConstraintProps {
  maxWidth: string;
  padded: boolean;
  justify: 'center' | 'flex-start' | 'flex-end';
}

const StyledWidthConstraint = styled.div`
  ${({ maxWidth, padded, justify }: StyledWidthConstraintProps) =>
    css`
      display: flex;
      justify-content: ${justify};
      width: 100%;

      .width-constraint-inner {
        width: 100%;

        max-width: ${maxWidth};
        padding: 0 ${padded ? padding.md : 0};

        ${mediaQuery(
          css`
            padding: 0 ${padded ? padding.xl4 : 0};
          `,
          { breakpoint: breakpoint.md }
        )}
      }
    `}
`;

export default function WidthConstraint({
  children,
  maxWidth,
  padded,
  justify,
}: {
  children: React.ReactNode;
} & Partial<StyledWidthConstraintProps>) {
  if (isNullOrUndefined(padded)) {
    padded = true;
  }

  if (isNullOrUndefined(justify)) {
    justify = 'center';
  }

  return (
    <StyledWidthConstraint maxWidth={maxWidth || defaultMaxWidth} padded={padded} justify={justify}>
      <div className="width-constraint-inner">{children}</div>
    </StyledWidthConstraint>
  );
}
