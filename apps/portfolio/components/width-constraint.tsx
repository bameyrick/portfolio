'use client';

import { mediaQuery } from '@/styles/helpers/breakpoint';
import { breakpoint, maxWidth, padding } from '@/styles/settings/layout';
import styled, { css } from 'styled-components';

const StyledWidthConstraint = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;

  .width-constraint-inner {
    max-width: ${maxWidth};
    width: 100%;
    padding: 0 ${padding.md};

    ${mediaQuery(
      css`
        padding: 0 ${padding.xl4};
      `,
      { breakpoint: breakpoint.md }
    )}
  }
`;

export default function WidthConstraint({ children }: { children: React.ReactNode }) {
  return (
    <StyledWidthConstraint>
      <div className="width-constraint-inner">{children}</div>
    </StyledWidthConstraint>
  );
}
