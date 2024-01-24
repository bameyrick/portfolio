import WorkPage from '@/components/work/work-page';
import { ONS_DESIGN_SYSTEM_URL } from '../ons-design-system/page';
import { RAC_URL } from '../rac/page';

export const ONS_PROTOTYPING_KIT_TITLE = 'Easy prototying';
export const ONS_PROTOTYPING_KIT_URL = 'ons-prototyping-kit';

export default function ONSPrototypingKit() {
  return (
    <WorkPage title={ONS_PROTOTYPING_KIT_TITLE} skills={[]} previous={ONS_DESIGN_SYSTEM_URL} next={RAC_URL}>
      yes
    </WorkPage>
  );
}
