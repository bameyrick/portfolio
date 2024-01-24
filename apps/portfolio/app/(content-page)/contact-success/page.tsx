import WidthConstraint from '@/components/width-constraint';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Submission successful | Ben Meyrick',
};

export default function ContactSuccess() {
  return (
    <WidthConstraint>
      <h1>Contact form submission successful</h1>
      <p className="fs-xl">Thank you for your submission. I will be in contact shortly.</p>
    </WidthConstraint>
  );
}
