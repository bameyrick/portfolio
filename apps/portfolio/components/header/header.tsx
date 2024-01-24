'use client';

import { AppPath } from '@/constants/app-path.enum';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { palette } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import Color from 'color';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useState } from 'react';
import styled, { css } from 'styled-components';
import Button from '../button';
import { Logo } from '../logo';
import ThemeToggle from '../theme-toggle';
import WidthConstraint from '../width-constraint';
import Navigation from './navigation';

const StyledHeader = styled.header`
  z-index: 2;
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;

  background: ${Color(palette.background.light).alpha(0.7).toString()};
  border-bottom: 1px solid ${palette.border['light']};
  backdrop-filter: blur(8px);

  [data-theme='dark'] & {
    background: ${Color(palette.background.dark).alpha(0.7).toString()};
    border-color: ${palette.border['dark']};
  }

  .inner {
    display: flex;
    width: 100%;
    gap: ${padding.lg};
    align-items: center;
    padding: ${padding.sm} 0;
  }

  .title {
    display: flex;
    gap: ${padding.sm};
    align-items: center;
    white-space: nowrap;
  }

  .logo {
    font-size: ${fontSize.xl3};
    height: 1em;
    width: 1em;
    line-height: 1;

    :after {
      display: none;
    }

    :hover:after {
      display: block;
      transform: translateY(0.2em);
    }
  }

  .buttons {
    display: flex;
    flex: 1 1 auto;
    gap: ${padding.sm};
    justify-content: flex-end;
  }

  .menu-button {
    ${mediaQuery(
      css`
        display: none;
      `,
      { breakpoint: breakpoint.sm }
    )}
  }

  .navigation {
    ${mediaQuery(
      css`
        display: none;
      `,
      { breakpoint: breakpoint.sm, direction: 'below' }
    )}
  }
`;

const StyledMobileNavigation = styled.div`
  z-index: 2;
  position: sticky;
  width: 100%;
  top: 69px;

  ${mediaQuery(
    css`
      display: none;
    `,
    { breakpoint: breakpoint.sm }
  )}

  .inner {
    position: absolute;
    width: 100%;
    padding: ${padding.sm};
    background: ${Color(palette.background.light).alpha(0.7).toString()};
    border-bottom: 1px solid ${palette.border['light']};
    backdrop-filter: blur(8px);
    display: none;

    [data-theme='dark'] & {
      background: ${Color(palette.background.dark).alpha(0.7).toString()};
      border-color: ${palette.border['dark']};
    }

    &--open {
      display: block;
    }
  }
`;

export default function Header() {
  const { resolvedTheme } = useTheme();

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <StyledHeader theme={resolvedTheme}>
        <WidthConstraint>
          <nav className="inner" role="navigation">
            <Link href={AppPath.Home} title="Home" className="logo" onClick={() => setMenuOpen(false)}>
              <Logo alt="Ben Meyrick" />
            </Link>

            <div className="navigation">
              <Navigation setOpen={setMenuOpen} />
            </div>

            <div className="buttons">
              <Button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>
                Menu
              </Button>

              <ThemeToggle />
            </div>
          </nav>
        </WidthConstraint>
      </StyledHeader>

      <StyledMobileNavigation className="open">
        <div className={`inner${menuOpen ? ` inner--open` : ``}`}>
          <Navigation setOpen={setMenuOpen} />
        </div>
      </StyledMobileNavigation>
    </>
  );
}
