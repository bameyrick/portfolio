import { useTheme } from 'next-themes';
import Button from './button';

import { ReactComponent as Moon } from '@/public/svg/moon.svg';
import { ReactComponent as Sun } from '@/public/svg/sun.svg';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';

const styles = css`
  width: 1em;
  height: 1em;
`;

const StyledSun = styled(Sun)`
  ${styles}
`;
const StyledMoon = styled(Moon)`
  ${styles}
`;

function ThemeIcon() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (mounted) {
    return resolvedTheme === 'dark' ? <StyledSun /> : <StyledMoon />;
  }
}

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  function toggleTheme() {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  }

  return (
    <Button
      className="theme-button"
      color="neutral"
      variant="outlined"
      iconOnly
      onClick={toggleTheme}
      title={`Change to ${resolvedTheme === 'light' ? 'dark' : 'light'} theme`}
    >
      <ThemeIcon />
    </Button>
  );
}
