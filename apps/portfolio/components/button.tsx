'use client';

import { ColorTheme, palette, staticPalette, white } from '@/styles/settings/colors';

import { padding, radius } from '@/styles/settings/layout';
import Color from 'color';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import { ComponentColor, ComponentVariant } from './component-props';

interface ComponentProps {
  color: ComponentColor;
  variant: ComponentVariant;
  iconOnly?: boolean;
  theme: ColorTheme;
  mounted: boolean;
}

export type ButtonProps = ComponentProps & React.ComponentPropsWithoutRef<'button'>;

const defaults: ComponentProps & Pick<React.ComponentPropsWithoutRef<'button'>, 'type'> = {
  type: 'button',
  color: 'primary',
  variant: 'solid',
  theme: 'light',
  mounted: false,
};

const StyledButton = styled.button`
  ${({ disabled }: ButtonProps) =>
    css`
      display: flex;
      padding-top: ${padding.xs};
      padding-bottom: ${padding.xs};
      min-height: 2.25rem;
      min-width: 2.25rem;
      justify-content: center;
      align-items: center;

      border: 1px solid transparent;
      border-radius: ${radius.sm};

      cursor: ${disabled ? 'not-allowed' : 'pointer'};
    `}

  ${({ iconOnly }: ButtonProps) => {
    const paddingX = iconOnly ? padding.xs : padding.sm;

    return css`
      padding-left: ${paddingX};
      padding-right: ${paddingX};
    `;
  }}

  ${({ variant, disabled, color, theme, mounted }: ButtonProps) => {
    if (mounted) {
      switch (variant) {
        case 'outlined': {
          return css`
            background-color: transparent;
            /* background-color: ${theme === 'light' ? palette.background['light'] : palette.background['dark']}; */
            border: 1px solid;
            border-color: ${disabled ? staticPalette['neutral'] : staticPalette[color]};

            ${disabled
              ? css`
                  color: ${staticPalette['neutral']};
                `
              : css`
                  color: ${theme === 'light' ? staticPalette[color] : Color(staticPalette[color]).lighten(0.6).toString()};
                `}

            :not(:focus-visible):hover {
              background-color: ${Color(staticPalette[color]).alpha(0.3).toString()};
            }
          `;
        }

        default: {
          return css`
            background-color: ${staticPalette[color]};
            color: ${disabled ? staticPalette['neutral'] : white};

            :hover {
              background: ${Color(staticPalette[color]).darken(0.25).toString()};
            }
          `;
        }
      }
    }
  }}
`;

export default function Button(props: Partial<ButtonProps>) {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  const buttonProps = { ...defaults, ...props } as ButtonProps;

  return <StyledButton {...buttonProps} theme={resolvedTheme} mounted={mounted} />;
}
