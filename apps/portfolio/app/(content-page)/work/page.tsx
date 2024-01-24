import WidthConstraint from '@/components/width-constraint';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Work | Ben Meyrick',
};

export default function Work() {
  return (
    <WidthConstraint>
      <h1>Work – A collection of projects</h1>
    </WidthConstraint>
  );
}
