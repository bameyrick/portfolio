'use client';

import WidthConstraint from '@/components/width-constraint';
import { AppPath } from '@/constants/app-path.enum';
import { staticPalette, white } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import Link from 'next/link';
import styled, { css } from 'styled-components';

import Experience from '@/components/experience';
import { ReactComponent as ArrowRight } from '@/public/svg/arrow-right.svg';
import { ReactComponent as Design } from '@/public/svg/design.svg';
import { ReactComponent as Devices } from '@/public/svg/devices.svg';
import { ReactComponent as Server } from '@/public/svg/server.svg';
import { ReactComponent as Test } from '@/public/svg/test.svg';
import { mediaQuery } from '@/styles/helpers/breakpoint';

const StyledHome = styled.div`
  .intro {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: ${padding.xl} 0;
    min-height: 60vh;

    ${mediaQuery(
      css`
        padding: ${padding.xl4} 0;
      `,
      { breakpoint: breakpoint.md }
    )}

    ${mediaQuery(
      css`
        min-height: 50vh;
      `,
      { breakpoint: 900, dimension: 'height' }
    )}
  }

  .title {
    font-size: ${fontSize.xl4};
    margin: 0 0 ${padding.lg};
  }

  .name {
    color: ${staticPalette.primary};
  }

  .about {
    font-size: ${fontSize.xl2};
  }

  .what-i-do {
    padding: ${padding.xl2} 0;
    background-color: ${staticPalette.primary};
    color: ${white};
  }

  .subtitle {
    font-size: ${fontSize.xl4};
    margin: 0 0 ${padding.xl};
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr;
    font-size: ${fontSize.xl};
    gap: ${padding.xl2};

    ${mediaQuery(
      css`
        grid-template-columns: 1fr 1fr;
        gap: ${padding.xl3};
        font-size: ${fontSize.xl2};
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .icon {
    width: 1em;
    height: 1em;
    font-size: ${fontSize.xl7};
    margin: 0 0 ${padding.sm};
  }

  .see-examples {
    font-size: ${fontSize.xl};
    margin: ${padding.xl2} 0 0;
    color: ${white};

    :after {
      display: none;
    }

    :hover {
      :after {
        display: block;
      }
    }

    ${mediaQuery(
      css`
        margin: ${padding.xl3} 0 0;
        font-size: ${fontSize.xl2};
      `,
      { breakpoint: breakpoint.md }
    )}
  }

  .see-examples-inner {
    display: inline-flex;
    gap: ${padding.sm};
    align-items: flex-start;
  }

  .arrow {
    margin-top: 0.2em;
    width: 1em;
    height: 1em;
    transform: translateY(0.25em);
  }
`;

export default function Home() {
  return (
    <StyledHome>
      <WidthConstraint>
        <section className="intro">
          <h1 className="title">
            Hello, I'm <span className="name">Ben Meyrick</span>.
          </h1>
          <p className="about">
            I'm a software engineer specialising in front‑end development. I build exceptional digital experiences using tools such as
            Angular, React, and NextJS.
          </p>
        </section>
      </WidthConstraint>

      <section className="what-i-do">
        <WidthConstraint>
          <h2 className="subtitle">What I do</h2>

          <div className="grid">
            <div>
              <Devices className="icon" />

              <h3>UI development</h3>

              <p>
                With over {<Experience />} years of experience as a front‑end engineer, I build user interfaces that are performant,
                scaleable, and accessible. I have strong skills in vanilla HTML, CSS, JavaScript and TypeScript, as well as experience with
                frameworks such as Angular, React, and NextJS.
              </p>
            </div>

            <div>
              <Server className="icon" />

              <h3>Backend development</h3>
              <p>
                Having experience in backend development using NodeJS, C#, frameworks like Express, NestJS, and ASP.NET, databases such as
                SQL Server, Postgres/PostGIS, and Firebase, I can build full-stack applications and APIs, and communicate effectively
                backend teams.
              </p>
            </div>

            <div>
              <Test className="icon" />

              <h3>Prototyping & user testing</h3>
              <p>
                I believe an evidence‑based approach is the best way to design and build products. Building prototypes and testing with real
                users helps to catch critical usability problems at the design phase, ensuring the end product is in the best shape
                possible.
              </p>
            </div>

            <div>
              <Design className="icon" />

              <h3>Design systems</h3>
              <p>
                Having a design that scales with a business is crucial. By taking a systematic approach to design, combined with scaleable
                code, a design system helps your product to grow seamlessly.
              </p>
            </div>
          </div>

          <p>
            <Link className="see-examples" href={AppPath.Work}>
              <span className="see-examples-inner">
                See some examples of my work here <ArrowRight className="arrow" />
              </span>
            </Link>
          </p>
        </WidthConstraint>
      </section>
    </StyledHome>
  );
}
