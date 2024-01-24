import { TimeUnit, msToUnit } from '@qntm-code/utils';

const experienceStart = new Date('2012-06-01').getTime();

export default function Experience() {
  return Math.floor(msToUnit(Date.now() - experienceStart, TimeUnit.Days) / 365);
}
