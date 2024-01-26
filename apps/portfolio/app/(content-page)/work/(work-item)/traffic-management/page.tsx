import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';
import Link from 'next/link';
import { TRAFFIC_MANAGEMENT_TITLE, TRAFFIC_MANAGEMENT_URL } from '../../constants';

export default function TrafficManagement() {
  return (
    <WorkPage
      title={TRAFFIC_MANAGEMENT_TITLE}
      skills={['Angular', 'RxJS', 'AG Grid', 'nx', 'monorepos', 'Storybook', 'Jest', 'Agile']}
      url={TRAFFIC_MANAGEMENT_URL}
    >
      <figure>
        <img src="/images/traffic-management/traffic-management-centre.jpg" />
        <figcaption>A traffic management centre utilising Yunex software</figcaption>
      </figure>

      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>

        <p>
          Yunex Traffic is one of the biggest names in traffic management and in partnership with TfL they embarked on the process build a
          new application for intelligent, adaptive network control.
        </p>

        <p>
          As part of this process I was contracted to work on their utc-config application and Angular component library to help integrate
          new features required by TfL. Working in a large agile team I would colabarate with the other UI developers, as well as C++
          backend developers, testers, and product owners.
        </p>

        <h2>Improving code quality</h2>

        <p>
          Yunex's array of software is vast and complex and much of their web based UIs relied on a library of common Angular components.
          These components had served the team well, however when these components required modification to accommodate new features the
          number of bugs and regression issues began to increase.
        </p>

        <p>
          To combat this I began work to introduce Jest unit tests to the component library. This helped with the team's confidence that
          existing functionality would still work as expected as new features were added. Once unit tests were in place, I began to replace
          any hand coded functionality that could be provided by Angular's{' '}
          <Link href="https://material.angular.io/cdk" target="_blank">
            cdk library
          </Link>
          . This helped to reduce the number of bugs and regressions further, as well as reducing the amount of code required to maintain
          the library.
        </p>

        <p>
          It was also imperative that we kept dependencies up to date to ensure the application was secure. Utilising nx and Angular's
          upgrade tools as well as npm-check made regular updates go smoothly with minimal disruption and refactoring.
        </p>

        <h2>Designing new features</h2>

        <p>
          As part of the project many new features needed to be added to the utc-config application. This was a collabartive effort where
          once the requirements were outlined by a product owner, a UI developer would create wireframe mockups of the user interface and
          the flow of the processes involved.
        </p>

        <p>
          Once these mockups were approved, UI developers would work closely with the backend team to agree upon the best way to handle the
          data required by the feature, including the design of new API endpoints, or upgrading existing APIs to handle extra information.
        </p>

        <h2>Conclusion</h2>

        <p>
          Working on such a large project and complex project was a great experience. The team communicated and collaberated effectively
          meaning that all new features were delivered on time.
        </p>
      </WidthConstraint>
    </WorkPage>
  );
}
