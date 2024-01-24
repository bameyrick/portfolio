'use client';

import { mediaQuery } from '@/styles/helpers/breakpoint';
import { grey } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import WidthConstraint from '../width-constraint';
import { Skills } from './skills';
import { WorkFooter } from './work-footer';

export const WORK_PAGE_TEXT_MAX_WIDTH = '600px';

function Client({ client }: { client?: string }) {
  if (client) {
    return (
      <>
        <span className="client">{client} </span>
      </>
    );
  }
}

const StyledWork = styled.div`
  .header {
    font-size: ${fontSize.lg};
    margin: 0 0 ${padding.xl};
  }

  .client {
    display: block;
    font-size: 1em;
    line-height: 1.2;
    color: ${grey[700]};

    [data-theme='dark'] & {
      color: ${grey[600]};
    }
  }

  .title {
    line-height: 1.5;
    font-size: ${fontSize.xl4};
  }

  .skills {
    margin: 0 0 ${padding.xl};
  }

  .body {
    font-size: ${fontSize.lg};
  }

  h2 {
    margin-top: ${padding.xl3};
  }

  p {
    :not(:last-child) {
      margin: 0 0 ${padding.xl};
    }
  }

  .image {
    width: 100%;
  }

  figure {
    :not(:first-of-type) {
      margin: ${padding.xl3} 0 0;
    }
  }

  figcaption {
    font-size: ${fontSize.sm};
  }

  ${mediaQuery(
    css`
      .title {
        font-size: ${fontSize.xl5};
      }
    `,
    { breakpoint: breakpoint.sm }
  )}
`;

export default function WorkPage({
  title,
  client,
  skills,
  next,
  previous,
  children,
}: {
  title: string;
  client?: string;
  next?: string;
  previous?: string;
  skills?: string[];
  children: React.ReactNode;
}) {
  return (
    <>
      <Helmet>
        <title>{title} | Ben Meyrick</title>
      </Helmet>
      <StyledWork>
        <WidthConstraint>
          <h1 className="header">
            <Client client={client} />
            <span className="title">{title}</span>
          </h1>

          <div className="skills">
            <Skills skills={skills} />
          </div>

          <div className="body">{children}</div>

          <WorkFooter next={next} previous={previous} />
        </WidthConstraint>
      </StyledWork>
    </>
  );
}
