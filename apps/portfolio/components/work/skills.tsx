'use client';

import { grey, staticPalette, white } from '@/styles/settings/colors';
import { padding, radius } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import styled from 'styled-components';

const StyledSkills = styled.div`
  .skills {
    &__title {
      margin: 0 0 ${padding.sm};
      font-size: ${fontSize.md};
      color: ${grey[700]};

      [data-theme='dark'] & {
        color: ${grey[600]};
      }
    }

    &__list {
      display: flex;
      flex-wrap: wrap;
      width: 100%;
      margin: 0;
      padding: 0;
      list-style: none;
      gap: ${padding.sm};
    }

    &__skill {
      display: flex;
      font-size: ${fontSize.xs};
      padding: ${padding.xs} ${padding.sm};
      border-radius: ${radius.sm};
      background: ${staticPalette.primary};
      color: ${white};
      white-space: nowrap;
    }
  }
`;

export function Skills({ skills }: { skills?: string[] }) {
  if (skills) {
    return (
      <StyledSkills>
        <h2 className="skills__title">Skills used:</h2>

        <ul className="skills__list">
          {skills.map(skill => (
            <li className="skills__skill" key={skill}>
              {skill}
            </li>
          ))}
        </ul>
      </StyledSkills>
    );
  }
}
