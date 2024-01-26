import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';
import Link from 'next/link';

export const DIGITAL_CENSUS_TITLE = 'A digital‑first census';
export const DIGITAL_CENSUS_URL = 'digital-census';

export default function DigitalCensus() {
  return (
    <WorkPage
      title={DIGITAL_CENSUS_TITLE}
      client="Office for National Statistics"
      skills={[
        'HTML',
        'CSS',
        'JavaScript/Typescript',
        'Nunjucks',
        'Unit Testing',
        'Node.js',
        'Circle CI',
        'Docker',
        'Git',
        'Kanban',
        'Agile',
      ]}
      url={DIGITAL_CENSUS_URL}
    >
      <figure>
        <img src="/images/census/census-overview.webp" />
        <figcaption>
          Starting the census and collecting household data, including establishing household{' '}
          <Link href="https://service-manual.ons.gov.uk/design-system/patterns/relationships" target="_blank">
            relationships
          </Link>
        </figcaption>
      </figure>

      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>

        <p>
          The Office for National Statistics embarked on an initiative to digitally transform the census, replacing the traditional
          paper-based approach that involved posting questionnaires to millions of households.
        </p>

        <p>
          The primary objective was to attain a high completion rate of 90% from approximately 27 million households. It was crucial that
          the survey be inclusive and accessible to the entire population. The design of the survey had to ensure that every single
          household was accurately accounted for, as incomplete or inaccurate data could have significant impacts on many aspects of
          society.
        </p>

        <h2>A questionnaire to used by everyone</h2>

        <p>
          I was contracted to lead the build of the UI for the electronic questionire. As the census would be required to be completed by
          everyone from all backgrounds, technical abilities, and disabilities, a new design system
          {/* <Link href={`${AppPath.Work}/${ONS_DESIGN_SYSTEM_URL}`}>design system</Link> */}
          was built and made available for all future questionnaires and services.
        </p>

        <p>
          To aid with the design and testing of the census a{' '}
          <Link href="https://service-manual.ons.gov.uk/design-system/guidance/ons-prototype-kit" target="_blank">
            prototyping kit
          </Link>{' '}
          was built on top of the design system. This allowed the team to rapidly test and iterate on the design of the questionaire using
          real UI components.
        </p>

        <h2>Test and test again</h2>

        <p>
          Within the design and development process, we adopted a progressive enhancement model and a mobile-first approach. We collaborated
          with the Digital Accessibility Centre to conduct accessibility testing of the question patterns. While the employees at the centre
          are proficient in using assistive technologies such as screen readers and voice-activated software, we recognised the importance
          of inclusivity and accessibility for all users. To ensure that our service and question patterns met these standards, we conducted
          prototype testing with participants in their own homes. You can read more about this approach in a blog post{' '}
          <Link href="https://digitalblog.ons.gov.uk/2019/04/09/making-online-questionnaires-inclusive-and-accessible/" target="_blank">
            Making online questionnaires inclusive and accessible
          </Link>{' '}
          by Charlotte Hirst.
        </p>

        <p>
          After completing the iterative design and research cycles, the prototypes were then published in the ONS Design System, which we
          originally developed to document survey design.
        </p>
      </WidthConstraint>

      <figure>
        <img src="/images/census/census-mobile.webp" />
        <figcaption>The survey was optimised to be completed on mobile</figcaption>
      </figure>

      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>{DIGITAL_CENSUS_TITLE}</h2>

        <p>
          The Census was hailed as the first truly digital-first census with 89% of all households receiving an invitation by post to
          complete the census online. 11% of households were sent paper questionnaires however 46.4% of those completed it online. You can
          read more about{' '}
          <Link
            href="https://www.ons.gov.uk/peoplepopulationandcommunity/householdcharacteristics/homeinternetandsocialmediausage/articles/designingadigitalfirstcensus/2021-10-04#:~:text=A%20digital%2Dfirst%20design%20for,the%20quality%20of%20the%20data."
            target="_blank"
          >
            Designing a digital-first census
          </Link>{' '}
          on the ONS website.
        </p>
      </WidthConstraint>
    </WorkPage>
  );
}
