'use client';

import WidthConstraint from '@/components/width-constraint';
import { AppPath } from '@/constants/app-path.enum';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { staticPalette } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import { WORK_ITEMS } from './constants';

const StyledWork = styled.div`
  .grid {
    display: grid;
    gap: ${padding.lg};
    margin-top: ${padding.xl2};

    ${mediaQuery(
      css`
        grid-template-columns: 1fr 1fr;
        gap: ${padding.xl2} ${padding.xl};
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .item {
    display: flex;
    flex-direction: column;
    gap: ${padding.sm};
  }

  .image {
    display: block;
    position: relative;
    background-color: ${staticPalette.primary};

    :before {
      content: '';
      display: block;
      padding-bottom: ${(9 / 16) * 100}%;
      background-color: ${staticPalette.primary};
    }

    :after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;

      background-size: cover;
      background-position: center;
      background-image: inherit;
      background-color: ${staticPalette.primary};
      filter: grayscale(100%);
      opacity: 0.6;
      transform: none;
      border-bottom: none;

      transition: opacity 0.2s ease-out, filter 0.2s ease-out;
    }

    :hover {
      :after {
        filter: grayscale(0%);
        opacity: 1;
      }
    }
  }

  .work-title {
    margin-bottom: 0;
  }
`;

export default function Work() {
  return (
    <StyledWork>
      <Helmet>
        <title>Work | Ben Meyrick</title>
      </Helmet>
      <WidthConstraint>
        <h1>Work – A collection of projects</h1>

        <div className="grid">
          {Object.entries(WORK_ITEMS).map(([key, { title, description, image }]) => (
            <div key={key} className="item">
              <Link href={`${AppPath.Work}/${key}`} className="image" style={{ backgroundImage: `url('${image}')` }}></Link>

              <h2 className="work-title">
                <Link href={`${AppPath.Work}/${key}`}>{title}</Link>
              </h2>

              <p>{description}</p>
            </div>
          ))}
        </div>
      </WidthConstraint>
    </StyledWork>
  );
}
