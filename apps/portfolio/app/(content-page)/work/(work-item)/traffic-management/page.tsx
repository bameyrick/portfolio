import WorkPage from '@/components/work/work-page';
import { MARINE_TRACKING_URL } from '../marine-tracking/page';
import { BRIDLEWAYS_URL } from '../uk-bridleway-finder/page';

export const TRAFFIC_MANAGEMENT_TITLE = 'Traffic management';
export const TRAFFIC_MANAGEMENT_URL = 'traffic-management';

export default function TrafficManagement() {
  return (
    <WorkPage
      title={TRAFFIC_MANAGEMENT_TITLE}
      skills={['Angular', 'RxJS', 'AG Grid', 'nx', 'monorepos', 'Jest', 'Agile']}
      previous={BRIDLEWAYS_URL}
      next={MARINE_TRACKING_URL}
    >
      yes
    </WorkPage>
  );
}
