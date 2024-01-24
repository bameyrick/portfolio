import WorkPage from '@/components/work/work-page';
import { DIGITAL_CENSUS_URL } from '../digital-census/page';
import { TRAFFIC_MANAGEMENT_URL } from '../traffic-management/page';

export const MARINE_TRACKING_TITLE = 'Marine tracking';
export const MARINE_TRACKING_URL = 'marine-tracking';

export default function MarineTracking() {
  return (
    <WorkPage title={MARINE_TRACKING_TITLE} skills={[]} next={DIGITAL_CENSUS_URL} previous={TRAFFIC_MANAGEMENT_URL}>
      yes
    </WorkPage>
  );
}
