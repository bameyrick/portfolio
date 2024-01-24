import { ReactComponent as SVG } from '@/public/svg/logo.svg';
import { staticPalette } from '@/styles/settings/colors';
import styled from 'styled-components';

export const Logo = styled(SVG)`
  width: 1em;
  height: 1em;
  color: ${staticPalette.primary};
`;
