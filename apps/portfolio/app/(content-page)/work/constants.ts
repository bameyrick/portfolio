export const DIGITAL_CENSUS_TITLE = 'A digital‑first census';
export const DIGITAL_CENSUS_URL = 'digital-census';
export const MARINE_TRACKING_TITLE = 'Marine tracking';
export const MARINE_TRACKING_URL = 'marine-tracking';
export const ONS_DESIGN_SYSTEM_TITLE = 'An accessible design system';
export const ONS_DESIGN_SYSTEM_URL = 'ons-design-system';
export const RAC_TITLE = 'E‑commerce platform';
export const RAC_URL = 'rac';
export const TRAFFIC_MANAGEMENT_TITLE = 'Traffic management';
export const TRAFFIC_MANAGEMENT_URL = 'traffic-management';
export const BRIDLEWAYS_TITLE = 'Bridleway finder';
export const BRIDLEWAYS_URL = 'uk-bridleway-finder';

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
    description: 'Next generation traffic management system for TfL.',
    image: '/images/traffic-management/yunex-traffic.webp',
  },
  [MARINE_TRACKING_URL]: {
    title: MARINE_TRACKING_TITLE,
    description: 'Tracking and monitoring systems for coastguard, ports, fisheries and other national agencies.',
    image: '/images/marine-traffic/srt-marine.webp',
  },
  [DIGITAL_CENSUS_URL]: {
    title: DIGITAL_CENSUS_TITLE,
    description: 'Building a questionnaire to be used by everyone.',
    image: '/images/census/ons-census.webp',
  },
  // [ONS_DESIGN_SYSTEM_URL]: {
  //   title: ONS_DESIGN_SYSTEM_TITLE,
  //   description: 'A design system to help the ONS build accessible services.',
  //   image: '/images/ons-design-system/ons-design-system.webp',
  // },
  // [RAC_URL]: {
  //   title: RAC_TITLE,
  //   description: 'Building a mobile first e‑commerce platform for the RAC.',
  //   image: '/images/rac/rac.webp',
  // },
};
