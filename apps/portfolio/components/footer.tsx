'use client';

import WidthConstraint from '@/components/width-constraint';
import { breakpoint, padding } from '@/styles/settings/layout';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import { ReactComponent as GitHub } from '@/public/svg/github.svg';
import { ReactComponent as LinkedIn } from '@/public/svg/linkedin.svg';
import { ReactComponent as NPM } from '@/public/svg/npm.svg';

import { mediaQuery } from '@/styles/helpers/breakpoint';
import { palette, staticPalette } from '@/styles/settings/colors';
import { fontSize } from '@/styles/typography/font-size';

const StyledFooter = styled.footer`
  border-top: 1px solid ${palette.border['light']};

  [data-theme='dark'] & {
    border-color: ${palette.border['dark']};
  }

  .grid {
    display: flex;
    padding: ${padding.md} 0;
    justify-content: space-between;
    align-items: center;

    ${mediaQuery(
      css`
        padding: ${padding.xl} 0;
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .copyright {
    margin: 0;
  }

  .links {
    display: flex;
    gap: ${padding.md};
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .link {
    color: inherit;

    :after {
      display: none;
      color: ${staticPalette.primary};
    }

    :hover {
      :after {
        display: block;
      }
    }
  }

  .icon {
    width: 1em;
    height: 1em;
    font-size: ${fontSize.xl3};
  }
`;

export default function Footer() {
  return (
    <StyledFooter>
      <WidthConstraint>
        <div className="grid">
          <p className="copyright">&copy; {new Date().getFullYear()} Ben Meyrick</p>

          <nav>
            <ul className="links">
              <li>
                <Link className="link" href="https://linkedin.com/in/bameyrick" title="LinkedIn" target="_blank">
                  <LinkedIn className="icon" />
                </Link>
              </li>

              <li>
                <Link className="link" href="https://github.com/bameyrick" title="GitHub" target="_blank">
                  <GitHub className="icon" />
                </Link>
              </li>

              <li>
                <Link className="link" href="https://www.npmjs.com/~bameyrick" title="NPM" target="_blank">
                  <NPM className="icon" />
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </WidthConstraint>
    </StyledFooter>
  );
}
