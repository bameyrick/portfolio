'use client';

import { ValidationErrors } from '@/models/validation-errors';
import { error, palette } from '@/styles/settings/colors';
import { padding, radius } from '@/styles/settings/layout';
import styled from 'styled-components';

const StyledFieldError = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${padding.sm};
  border-radius: ${radius.sm};
  background-color: ${error[100]};
  color: ${palette.text.light};

  .message {
    color: ${error[700]};
    margin: 0 0 ${padding.xs};
  }
`;

export default function FieldError({
  id,
  label,
  errors,
  children,
}: {
  id: string;
  label?: string;
  errors?: ValidationErrors;
  children: React.ReactElement[];
}) {
  const error = errors?.[id];

  if (error) {
    return (
      <StyledFieldError>
        <p className="message">{error}</p>

        {children}
      </StyledFieldError>
    );
  }

  return children;
}
