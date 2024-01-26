import WidthConstraint from '@/components/width-constraint';
import WorkPage, { WORK_PAGE_TEXT_MAX_WIDTH } from '@/components/work/work-page';

export const ONS_DESIGN_SYSTEM_TITLE = 'An accessible design system';
export const ONS_DESIGN_SYSTEM_URL = 'ons-design-system';

export default function ONSDesignSystem() {
  return (
    <WorkPage
      title={ONS_DESIGN_SYSTEM_TITLE}
      client="Office for National Statistics"
      skills={['HTML', 'CSS', 'JavaScript/Typescript', 'Nunjucks', 'Unit Testing', 'Node.js', 'Circle CI', 'Docker', 'Git', 'Sketch']}
      url={ONS_DESIGN_SYSTEM_URL}
    >
      <WidthConstraint padded={false} maxWidth={WORK_PAGE_TEXT_MAX_WIDTH} justify="flex-start">
        <h2>Overview</h2>
      </WidthConstraint>
    </WorkPage>
  );
}
