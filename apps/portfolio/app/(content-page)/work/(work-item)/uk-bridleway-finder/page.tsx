import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';
import { AppPath } from '@/constants/app-path.enum';
import Link from 'next/link';
import { TRAFFIC_MANAGEMENT_URL } from '../traffic-management/page';

export const BRIDLEWAYS_TITLE = 'Bridleway finder';
export const BRIDLEWAYS_URL = 'uk-bridleway-finder';

export default function UKBridlewayFinder() {
  return (
    <WorkPage
      title={BRIDLEWAYS_TITLE}
      skills={[
        'Angular',
        'RxJS',
        'ngrx/store',
        'NestJS',
        'Postgres/PostGIS',
        'Docker',
        'MapLibre GL',
        'Turf.js',
        'tippecanoe',
        'Osmium',
        'TypeScript',
        'Node JS',
        'NGINX',
        'Git',
        'nx',
        'Monorepos',
      ]}
      next={TRAFFIC_MANAGEMENT_URL}
    >
      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>

        <p>
          A personal project spurred my interest in horse riding, I was frustrated at how difficult it was to find bridleways and other
          suitable routes for hacking out. I took it upon myself to build a website that combined public right of way data from local
          authorities with open data from OpenStreetMap to create a{' '}
          <Link href="https://bridleways.uk" target="_blank">
            map of bridleways
          </Link>{' '}
          and other routes suitable for horse riding.
        </p>

        <h2>The challenges of PRoW data</h2>

        <p>
          Upon beginning this project I had the intention of exclusively using public rights of way data from OpenStreetMap, however with
          this being crowd sourced data, ensuring my filters were extracting and specifying the correct designation was at the mercy of the
          crowd sourced data being correct. I therefore decided to use public rights of way data from local authorities as the primary
          source of truth, and thankfully Barry Cornelius has collated all available public authority data on{' '}
          <Link href="https://www.rowmaps.com" target="_blank">
            his website
          </Link>
          .
        </p>

        <p>
          The GeoJSON data provided by some local authorities present some challenges when processing the data for ingest into the map
          tiling service and database. Many authorities will give multiple ways the same IDs even if there is no continuation between the
          individual ways. Some ways would be split into multiple sections of a relation, however each of these sections may not be in the
          correct order, and the order of the points would vary from section to section. This made if extremely difficult to filter
          duplicated ways that are also found in the OpenStreetMap data.
        </p>

        <p>
          To overcome these challenges I wrote a programme that would take prefrome geospatial analysis on both data sets. This program:
        </p>

        <ul>
          <li>Converts OSM formated data to GeoJSON</li>
          <li>Filters only PRoW data from the OSM GeoJSON</li>
          <li>Finds OSM ways that overlap with local authority PRoW ways</li>
          <li>Merges OSM data such as surface, trail visibility, and riding difficulty on to matching PRoW ways </li>
          <li>Combines PRoW features into one long feature if possible</li>
          <li>Generates map tiles for the website to use</li>
        </ul>

        <p>
          With millions of ways to process from both public authorities and OpenStreetMap, the program needed some significant optimisation
          to ensure it completed within a sensible time. Utilising techniques such as splitting the UK into a geospatial matrix, and
          utilising parallel processing, I was able to optimise the run time from multiple days to just a few hours.
        </p>

        <h2>Building the map</h2>

        <p>
          The user facing side of the project was arguably the easiest part to build. The UI is built using Angular, RxJS, and ngrx/store,
          and mapping provided by MapLibre GL (an open source fork of Mapbox GL). The backend is built using NestJS, nodemailer,
          Postgres/PostGIS, and nginx. Deployments are made easy by containerising the application using Docker.
        </p>

        <h2>User management</h2>

        <p>
          Having the ability to comment on individual ways means that the website could be hijacked by bad actors. As such I felt the need
          to ensure that users must sign up for an account to verify their legitimacy. This would also give me the benefit of being able to
          moderate comments added by users.
        </p>

        <p>
          The website features an admin area accessible to authorised administrators and moderators that allows management of users and
          moderation of submitted content. This is a bespoke authentication system purpose built by myself, featuring email verification,
          password reset and recovery, role based access controls.
        </p>

        <h2>A great resource for equestrians</h2>

        <p>
          The{' '}
          <Link href="https://bridleways.uk" target="_blank">
            UK Bridleway Finder
          </Link>{' '}
          map has proven to be a great resource for equestrians, with users numbers steadily increasing and crowd sourced information on the
          state of bridleways is being added to the database.
        </p>

        <p>
          If you would like a similar system built for your business, why not <Link href={AppPath.Contact}>get in touch</Link> and see if I
          can help bring your ideas into reality.
        </p>
      </WidthConstraint>
    </WorkPage>
  );
}
