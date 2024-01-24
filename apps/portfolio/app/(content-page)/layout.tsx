'use client';

import { mediaQuery } from '@/styles/helpers/breakpoint';
import { breakpoint, padding } from '@/styles/settings/layout';
import styled, { css } from 'styled-components';

const StyledContentPage = styled.div`
  padding: ${padding.md} 0;

  ${mediaQuery(
    css`
      padding: ${padding.xl} 0;
    `,
    { breakpoint: breakpoint.md }
  )}
`;

export default function ContentPage({ children }: { children: React.ReactNode }) {
  return <StyledContentPage>{children}</StyledContentPage>;
}
