import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';
import { MARINE_TRACKING_TITLE, MARINE_TRACKING_URL } from '../../constants';

export default function MarineTracking() {
  return (
    <WorkPage
      title={MARINE_TRACKING_TITLE}
      skills={['Angular', 'RxJS', 'ngrx/store', 'WebSockets', 'Jest', 'Storybook', 'Node.js', 'Jenkins', 'Git', 'Agile']}
      url={MARINE_TRACKING_URL}
    >
      <figure>
        <img src="/images/marine-traffic/control-room.webp" />
        <figcaption>A fisheries control room running a SRT Marine's tracking system</figcaption>
      </figure>

      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>

        <p>
          SRT are a leader in next‑generation maritime domain surveillance systems. Their systems are used globally by governments and
          national authorities to gain complete and autonomous command and control over their maritime domain.
        </p>

        <p>
          With my expertise in developing complex user interfaces, I was contracted to lead the development of the data screen component of
          the their new maritime surveillance system.
        </p>

        <h2>A full reboot</h2>

        <p>
          A previous version of the system had been built in Angular 2, however due to the rapid development and complexity of the product,
          a complete rebuild in a later version of Angular was required.
        </p>

        <p>
          The intention of the rebuild was to completely overhaul the navigation and routing of the product to better handle the addition of
          new features, and to implement a state management system to improve the handling of live data.
        </p>
      </WidthConstraint>

      <figure>
        <img src="/images/marine-traffic/data-screen.webp" />
        <figcaption>A vessel eLog shown in the Angular powered data screen</figcaption>
      </figure>

      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>State management</h2>

        <p>
          With the business wanting to introduce new live data features such as chat functionally, a way of controlling global state was
          required to ensure the performance and consistency of the application. Using the powerful ngrx/store library, the team was able to
          create a robust state management system that could handle the complex data flows of the application, as well as providing a way to
          easily debug the application state.
        </p>

        <h2>Mentoring a growing team</h2>

        <p>
          As additional functionality and requirements were backlogged for the product, it became necessary for the development team to
          expand. As the lead Angular developer, I was tasked with mentoring the new developers and ensuring they were able to contribute to
          a high standard.
        </p>

        <p>
          I created a set of guidelines and best practices for the team to follow, as well as introducing a code review process to ensure
          quality and consistency. With the help of linters and code formatters, the team was able to produce code that was easy to read and
          maintain, and with the use of Jenkins, SonarQube, and Jest, the team was able to ensure the quality of the codebase.
        </p>
      </WidthConstraint>
    </WorkPage>
  );
}
