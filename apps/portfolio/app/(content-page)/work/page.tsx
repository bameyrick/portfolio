'use client';

import WidthConstraint from '@/components/width-constraint';
import { AppPath } from '@/constants/app-path.enum';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { staticPalette } from '@/styles/settings/colors';
import { breakpoint, padding } from '@/styles/settings/layout';
import Link from 'next/link';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';
import { DIGITAL_CENSUS_TITLE, DIGITAL_CENSUS_URL } from './(work-item)/digital-census/page';
import { MARINE_TRACKING_TITLE, MARINE_TRACKING_URL } from './(work-item)/marine-tracking/page';
import { ONS_DESIGN_SYSTEM_TITLE, ONS_DESIGN_SYSTEM_URL } from './(work-item)/ons-design-system/page';
import { ONS_PROTOTYPING_KIT_TITLE, ONS_PROTOTYPING_KIT_URL } from './(work-item)/ons-prototyping-kit/page';
import { RAC_TITLE, RAC_URL } from './(work-item)/rac/page';
import { TRAFFIC_MANAGEMENT_TITLE, TRAFFIC_MANAGEMENT_URL } from './(work-item)/traffic-management/page';
import { BRIDLEWAYS_TITLE, BRIDLEWAYS_URL } from './(work-item)/uk-bridleway-finder/page';

interface WorkItem {
  title: string;
  description: string;
  image: string;
}

export const WORK_ITEMS: Record<string, WorkItem> = {
  [BRIDLEWAYS_URL]: {
    title: BRIDLEWAYS_TITLE,
    description: 'A website to help people find bridleways in the UK.',
    image: '/images/bridleways/bridleway-map.webp',
  },
  [TRAFFIC_MANAGEMENT_URL]: {
    title: TRAFFIC_MANAGEMENT_TITLE,
    description: 'Next generation traffic management system for Yunex Traffic and TfL.',
    image: '/images/yunex-traffic.webp',
  },
  [MARINE_TRACKING_URL]: {
    title: MARINE_TRACKING_TITLE,
    description: 'Tracking and monitoring systems for coastguard, ports, fisheries and other national agencies.',
    image: '/images/srt-marine.webp',
  },
  [DIGITAL_CENSUS_URL]: {
    title: DIGITAL_CENSUS_TITLE,
    description: 'Building a questionnaire to be used by everyone.',
    image: '/images/ons-census.webp',
  },
  [ONS_DESIGN_SYSTEM_URL]: {
    title: ONS_DESIGN_SYSTEM_TITLE,
    description: 'A design system to help the ONS build accessible services.',
    image: '/images/ons-design-system.webp',
  },
  [ONS_PROTOTYPING_KIT_URL]: {
    title: ONS_PROTOTYPING_KIT_TITLE,
    description: 'A easy to use prototyping kit to help the ONS test products.',
    image: '/images/ons-prototyping-kit.webp',
  },
  [RAC_URL]: {
    title: RAC_TITLE,
    description: 'Building a mobile first e‑commerce platform for the RAC.',
    image: '/images/rac.webp',
  },
};

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
