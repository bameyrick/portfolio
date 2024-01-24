'use client';

import Experience from '@/components/experience';
import WidthConstraint from '@/components/width-constraint';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { breakpoint, padding, radius } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

import { AppPath } from '@/constants/app-path.enum';
import { ReactComponent as ArrowRight } from '@/public/svg/arrow-right.svg';
import { grey } from '@/styles/settings/colors';
import Link from 'next/link';

const StyledAbout = styled.div`
  font-size: ${fontSize.xl};

  .title {
    margin: 0 0 ${padding.md};

    ${mediaQuery(
      css`
        margin: 0 0 ${padding.xl2};
        font-size: ${fontSize.xl5};
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .grid {
    display: flex;
    flex-direction: column;
    gap: ${padding.lg};

    ${mediaQuery(
      css`
        flex-direction: row;
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .image {
    flex: 1 1 auto;
    width: 100%;
    align-self: flex-start;
    max-width: 200px;
    background-color: ${grey[300]};
    background-image: url('/images/portrait.webp');
    background-size: cover;
    border-radius: ${radius.md};

    &:before {
      content: '';
      display: block;
      padding-top: 100%;
    }
  }

  .inner {
    max-width: 600px;
  }

  .subtitle {
    margin-top: ${padding.xl2};
  }

  .list {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .work-link {
    margin-top: ${padding.xl};
    font-size: ${fontSize.xl};

    :after {
      display: none;
    }

    :hover {
      :after {
        display: block;
      }
    }
  }

  .work-link-inner {
    display: inline-flex;
    gap: ${padding.xs};
    align-items: center;
  }

  .arrow {
    width: 1em;
    height: 1em;
  }
`;

const StyledListItem = styled.li`
  :not(:last-child) {
    margin-bottom: ${padding.sm};
  }

  .list-item {
    &__inner {
      display: flex;
      gap: ${padding.md};
    }

    &__arrow {
      flex: 0 0 auto;
      margin-top: 0.35em;
      width: 1em;
      height: 1em;
    }
  }
`;

function ListItem({ children }: { children: React.ReactNode }) {
  return (
    <StyledListItem>
      <span className="list-item__inner">
        <ArrowRight className="list-item__arrow" />
        <span>{children}</span>
      </span>
    </StyledListItem>
  );
}

export default function About() {
  return (
    <>
      <Helmet>
        <title>About | Ben Meyrick</title>
      </Helmet>
      <StyledAbout>
        <WidthConstraint>
          <h1 className="title">A software engineer with over {<Experience />} years of experience.</h1>

          <div className="grid">
            <div className="image"></div>
            <div className="inner">
              <p>
                In 2014 I graduated from Brunel University with a first‑class BSc Hons in Multimedia Design and Technology. Since then I
                have developed complex and efficient software products across e‑commerce, marine tracking, transport management, and
                government.
              </p>

              <h2 className="subtitle">Stuff I enjoy doing:</h2>

              <ul className="list">
                <ListItem>Developing performant applications with Angular or React</ListItem>
                <ListItem>Building design systems to streamline development</ListItem>
                <ListItem>Testing UI with real users</ListItem>
                <ListItem>Improving accessibility and usability of products</ListItem>
                <ListItem>Improving code with automated testing</ListItem>
                <ListItem>Working within agile environments</ListItem>
                <ListItem>
                  Prototyping or using kits such as{' '}
                  <Link href="https://prototype-kit.service.gov.uk/docs/" target="_blank">
                    GOV.UK
                  </Link>{' '}
                  or{' '}
                  <Link href="https://service-manual.ons.gov.uk/design-system/guidance/ons-prototype-kit" target="_blank">
                    ONS
                  </Link>
                </ListItem>
                <ListItem>Developing open‑source libraries and modules</ListItem>
                <ListItem>Working with live data and streams</ListItem>
                <ListItem>Automating testing and code quality control systems</ListItem>
              </ul>

              <Link href={AppPath.Work} className="work-link">
                <span className="work-link-inner">
                  Explore my work in more detail <ArrowRight className="arrow" />
                </span>
              </Link>
            </div>
          </div>
        </WidthConstraint>
      </StyledAbout>
    </>
  );
}
