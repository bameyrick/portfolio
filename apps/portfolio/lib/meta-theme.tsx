'use client';

import { ColorTheme, getMetaColorTheme } from '@/styles/settings/colors';
import { useTheme } from 'next-themes';
import { Helmet } from 'react-helmet';

export default function MetaTheme() {
  const { resolvedTheme } = useTheme();

  return (
    <Helmet>
      <meta name="theme-color" content={getMetaColorTheme(resolvedTheme as ColorTheme)} />
    </Helmet>
  );
}
