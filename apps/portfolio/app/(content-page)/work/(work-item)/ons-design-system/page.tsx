import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';
import { DIGITAL_CENSUS_URL } from '../digital-census/page';
import { ONS_PROTOTYPING_KIT_URL } from '../ons-prototyping-kit/page';

export const ONS_DESIGN_SYSTEM_TITLE = 'An accessible design system';
export const ONS_DESIGN_SYSTEM_URL = 'ons-design-system';

export default function ONSDesignSystem() {
  return (
    <WorkPage
      title={ONS_DESIGN_SYSTEM_TITLE}
      client="Office for National Statistics"
      skills={['HTML', 'CSS', 'JavaScript/Typescript', 'Nunjucks', 'Unit Testing', 'Node JS', 'Circle CI', 'Docker', 'Git', 'Sketch']}
      previous={DIGITAL_CENSUS_URL}
      next={ONS_PROTOTYPING_KIT_URL}
    >
      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>
      </WidthConstraint>
    </WorkPage>
  );
}
