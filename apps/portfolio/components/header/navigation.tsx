import { AppPath } from '@/constants/app-path.enum';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { staticPalette } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import Link from 'next/link';
import styled, { css } from 'styled-components';

const headerLinks: { href: string; label: string }[] = [
  {
    label: 'About',
    href: AppPath.About,
  },
  {
    label: 'Work',
    href: AppPath.Work,
  },
  // {
  //   label: 'Contact',
  //   href: AppPath.Contact,
  // },
];

const StyledNavigation = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: ${padding.lg};
  font-size: ${fontSize.lg};

  ${mediaQuery(
    css`
      flex-direction: row;
    `,
    { breakpoint: breakpoint.sm }
  )}

  .link {
    color: inherit;

    :after {
      display: none;
      border-color: ${staticPalette.primary};
      transform: translateY(0.5em);
    }

    :hover {
      :after {
        display: block;
      }
    }
  }
`;

export default function Navigation({ setOpen }: { setOpen: (open: boolean) => void }) {
  return (
    <StyledNavigation>
      {headerLinks.map(({ href, label }) => (
        <li key={href}>
          <Link className="link" href={href} onClick={() => setOpen(false)}>
            {label}
          </Link>
        </li>
      ))}
    </StyledNavigation>
  );
}
