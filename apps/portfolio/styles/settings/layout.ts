import { Size } from '../size';

export const breakpoint: Record<Size, number> = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};

export type PaddingSize = Size | 'xl2' | 'xl3' | 'xl4';

export const padding: Record<PaddingSize, string> = {
  xs: '0.375rem',
  sm: '1rem',
  md: '1.5rem',
  lg: '2rem',
  xl: '3rem',
  xl2: '4rem',
  xl3: '6rem',
  xl4: '8rem',
};

export const maxWidth = `calc(1200px - ${padding.xl4})`;

export const radius: Record<Size, string> = {
  xs: '2px',
  sm: '6px',
  md: '8px',
  lg: '12px',
  xl: '16px',
};
