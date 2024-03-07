'use client';

import Button from '@/components/button';
import FormField from '@/components/form/field';
import WidthConstraint from '@/components/width-constraint';
import { ValidationRule } from '@/models/validation-rule';
import { mediaQuery } from '@/styles/helpers/breakpoint';
import { breakpoint, padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import { isEmpty, isNullOrUndefined } from '@qntm-code/utils';
import Link from 'next/link';
import { useState } from 'react';
import { Helmet } from 'react-helmet';
import styled, { css } from 'styled-components';

const StyledContact = styled.div`
  font-size: ${fontSize.xl};

  .form {
    margin-top: ${padding.xl};

    ${mediaQuery(
      css`
        margin-top: ${padding.xl3};
      `,
      { breakpoint: breakpoint.md }
    )}
  }
`;

const validationRules: Record<string, ValidationRule> = {
  Name: {
    required: true,
    minLength: 2,
  },
  Email: {
    required: true,
  },
  Message: {
    required: true,
    minLength: 10,
    maxLength: 1000,
  },
};

export default function Contact() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formValue, setFormValue] = useState({ Name: '', Email: '', Message: '', second_name: '' });
  const [sending, setSending] = useState(false);

  function setFieldValue(event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { id, value } = event.currentTarget;

    setFormValue({
      ...formValue,
      [id]: value,
    });
  }

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    const errors: Record<string, string> = {};

    const value = Array.from(event.currentTarget.elements)
      .filter(element => element.hasAttribute('name'))
      .reduce(
        (result, element) => ({
          ...result,
          [element.getAttribute('name')!]: {
            id: element.id,
            label: element.getAttribute('aria-label') as string,
            value: (element as HTMLInputElement).value.toString().trim(),
          },
        }),
        {} as Record<string, { value: string; id: string; label: string }>
      );

    if (!isEmpty(value.second_name.value)) {
      event.preventDefault();

      while (true) {
        console.log('No.');
      }
    } else {
      Object.entries(validationRules).forEach(([key, rules]) => {
        const field = value[key];
        const fieldRules = Object.entries(rules);

        for (let i = 0, l = fieldRules.length; i < l; i++) {
          const [ruleKey, rule] = fieldRules[i];

          let error: string | null = null;

          switch (ruleKey) {
            case 'required': {
              if (isEmpty(field.value)) {
                error = '{label} is required';
              }
              break;
            }
            case 'minLength': {
              if (field.value.length < rule) {
                error = '{label} must be at least {rule} characters';
              }
              break;
            }
            case 'maxLength': {
              if (field.value.length > rule) {
                error = '{label} must be no more than {rule} characters';
              }
              break;
            }
          }

          if (!isNullOrUndefined(error)) {
            errors[field.id] = error.replace(/{rule}/g, rule.toString()).replace(/{label}/g, field.label!);

            break;
          }
        }
      });

      if (!isEmpty(errors)) {
        event.preventDefault();
      }

      setErrors(errors);
    }
  }

  return (
    <>
      <Helmet>
        <title>Contact | Ben Meyrick</title>
      </Helmet>
      <WidthConstraint>
        <StyledContact>
          <h1>Contact</h1>

          <p>
            If you would like to discuss my work forther or talk about potential projects, please feel free to submit your contact details.
          </p>

          <p>
            Additionally, you can connect with me via{' '}
            <Link href="https://linkedin.com/in/bameyrick" target="_blank">
              LinkedIn
            </Link>
            .
          </p>

          <form
            className="form"
            onSubmit={onSubmit}
            method="post"
            action="https://forms.un-static.com/forms/4fa33757084b55038e07e7a0123074c9e13bb4e0"
          >
            <fieldset>
              <legend>
                <h2>Your contact details</h2>
              </legend>

              <FormField errors={errors}>
                <label>Full name</label>
                <input type="text" name="Name" value={formValue.Name} onChange={setFieldValue} disabled={sending} />
              </FormField>

              <FormField hidden={true}>
                <label>Second name</label>
                <input type="text" name="second_name" value={formValue.second_name} onChange={setFieldValue} disabled={sending} />
              </FormField>

              <FormField errors={errors}>
                <label>Email address</label>
                <input type="email" name="Email" value={formValue.Email} onChange={setFieldValue} disabled={sending} />
              </FormField>

              <FormField errors={errors}>
                <label>Message</label>
                <textarea name="Message" value={formValue.Message} onChange={setFieldValue} disabled={sending} />
              </FormField>

              <Button type="submit" disabled={sending}>
                Send message
              </Button>
            </fieldset>
          </form>
        </StyledContact>
      </WidthConstraint>
    </>
  );
}
