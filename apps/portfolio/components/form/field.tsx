import { ValidationErrors } from '@/models/validation-errors';
import { padding } from '@/styles/settings/layout';
import { isString } from '@qntm-code/utils';
import React from 'react';
import styled, { css } from 'styled-components';
import { v4 as uuid } from 'uuid';
import FieldError from './field-error';

const StyledFormField = styled.div`
  ${({ hidden }: { hidden?: boolean }) => css`
    display: ${hidden ? 'none !important' : 'flex'};
    flex-direction: column;
    gap: ${padding.xs};

    :not(:last-child) {
      margin-bottom: 0;
    }
  `}
`;

export interface FormFieldProps {
  errors?: ValidationErrors;
  children: React.ReactNode;
}

export default function FormField({
  children,
  errors,
  hidden,
}: {
  children: React.ReactElement[];
  errors?: ValidationErrors;
  hidden?: boolean;
}) {
  const { label, input, textarea } = React.Children.map(children, element => {
    if (!React.isValidElement(element)) {
      return;
    }

    if (isString(element.type) && ['label', 'input', 'textarea'].includes(element.type)) {
      return element;
    }
  }).reduce((result, element) => ({ ...result, [element.type as string]: element }), {} as Record<string, React.ReactElement>);

  const control = input || textarea;
  const id = control?.props.id || control?.props.name || uuid();
  const labelText = label.props.children;

  return (
    <StyledFormField hidden={hidden}>
      <FieldError id={id} label={labelText} errors={errors}>
        {React.cloneElement(label, { htmlFor: id })}
        {React.cloneElement(control, { id, 'aria-label': labelText, className: `${id && errors?.[id] ? 'invalid' : ''}` })}
      </FieldError>
    </StyledFormField>
  );
}
