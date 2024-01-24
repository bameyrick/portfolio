import { Size } from '../size';

export type FontSize = Size | 'xl2' | 'xl3' | 'xl4' | 'xl5' | 'xl6' | 'xl7';

export const fontSize: Record<FontSize, string> = {
  xs: '0.75rem',
  sm: '0.875rem',
  md: '1rem',
  lg: '1.125rem',
  xl: '1.25rem',
  xl2: '1.5rem',
  xl3: '1.875rem',
  xl4: '2.25rem',
  xl5: '3rem',
  xl6: '4rem',
  xl7: '5rem',
};
