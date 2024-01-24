'use client';

import { ColorTheme, error, focus, palette, staticPalette } from '@/styles/settings/colors';
import { padding, radius } from '@/styles/settings/layout';
import { FONT_NAME, fontFace } from '@/styles/typography/font-face';
import { typography } from '@/styles/typography/reset';
import Color from 'color';
import { useTheme } from 'next-themes';
import { createGlobalStyle, css } from 'styled-components';
import normalize from 'styled-normalize';

const Styles = createGlobalStyle<{ theme: ColorTheme }>`
  ${normalize}

  ${fontFace}

  ${typography}

  html {
    height: fill-available;
  }

  html,
  body {
    font-family: ${FONT_NAME}, sans-serif;

    ${({ theme }: { theme: ColorTheme }) =>
      css`
        background: ${palette.background[theme]};
        color: ${palette.text[theme]};
      `}
  }

  body {
    display: flex;
    flex-direction: column;
    min-height: fill-available;
  }

  main {
    flex: 1 1 auto;
  }

  * {
    box-sizing: border-box;

    :focus,
    :focus-visible {
      outline: none;
    }

    :focus-visible {
      position: relative;

      :before {
        z-index:-1;
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        right: -5px;
        bottom: -5px;
        left: -5px;
        background: ${focus};
        border-radius: ${radius.sm};
      }
    }

    ::selection {
      color: #222;
      background: ${focus};
    }
  }

  a {
    position: relative;
    display: inline-block;
    color: ${staticPalette.primary};
    text-decoration: none;

    :after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      transform: translateY(0.05em);
      border-bottom: 2px solid currentColor;
    }

    :hover {
      color: ${Color(staticPalette.primary).darken(0.2).toString()};


    }

    :focus,
    :focus-visible {
      outline: none;
    }

    :focus-visible {
      color: #222;
      font-weight: bold;
    }
  }

  fieldset {
    display: grid;
    grid-template-columns: 1fr;
    gap:  ${padding.md};
    border: none;
    padding: 0;
    margin: 0;
  }

  legend {
    display: flex;
    white-space: nowrap;
    margin: 0 0 ${padding.sm}
  }


  input[type="text"],
  input[type="email"],
  textarea {
    padding: ${padding.xs};
    background-color: ${Color(palette.background['light']).darken(0.01).toString()};
    border: 1px solid ${Color(palette.border['light']).darken(0.1).toString()};
    border-radius: ${radius.sm};

    [data-theme='dark'] & {
      background-color: ${Color(palette.background['dark']).lighten(0.3).toString()};
      border-color: ${Color(palette.border['dark']).lighten(0.5).toString()};
    }

    &.invalid {
      border-color: ${error[700]};
      box-shadow: 0 0 0 1px ${error[700]};
    }

    :focus {
      box-shadow: 0 0 0 3px ${focus};
    }
  }

  textarea {
    min-height: 7em;
    resize: vertical;
  }

  figure {
    margin: 0;
  }
`;

export default function GlobalStyles() {
  const { resolvedTheme } = useTheme();

  return <Styles theme={resolvedTheme} />;
}
