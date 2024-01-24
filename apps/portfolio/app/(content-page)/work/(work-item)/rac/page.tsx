import WorkPage from '@/components/work/work-page';
import { ONS_PROTOTYPING_KIT_URL } from '../ons-prototyping-kit/page';

export const RAC_TITLE = 'E‑commerce platform';
export const RAC_URL = 'rac';

export default function RAC() {
  return (
    <WorkPage title={RAC_TITLE} skills={[]} previous={ONS_PROTOTYPING_KIT_URL}>
      yes
    </WorkPage>
  );
}
