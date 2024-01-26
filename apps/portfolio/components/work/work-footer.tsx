'use client';

import { AppPath } from '@/constants/app-path.enum';
import { palette, staticPalette } from '@/styles/settings/colors';
import { padding } from '@/styles/settings/layout';
import { fontSize } from '@/styles/typography/font-size';
import { isNullOrUndefined } from '@qntm-code/utils';
import { WORK_ITEMS } from 'app/(content-page)/work/constants';
import Link from 'next/link';
import styled from 'styled-components';

import { ReactComponent as ArrowLeft } from '@/public/svg/arrow-left.svg';
import { ReactComponent as ArrowRight } from '@/public/svg/arrow-right.svg';

const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  padding: ${padding.xl} ${padding.md};
  color: inherit;

  :not(:last-child) {
    border-right: 1px solid ${palette.border.light};

    [data-theme='dark'] & {
      border-color: ${palette.border.dark};
    }
  }

  :after {
    display: none;
  }

  .WorkFooterLink {
    &__name {
      color: ${staticPalette.primary};
    }

    &__type {
      display: flex;
      gap: ${padding.sm};
      align-items: center;
      font-size: ${fontSize.xl2};
    }

    &__arrow {
      width: 1.5em;
      height: 1.5em;
    }
  }
`;

function Previous({ previous }: { previous?: string }) {
  if (previous) {
    return (
      <StyledLink href={`${AppPath.Work}/${previous}`}>
        <span className="WorkFooterLink__type">
          <ArrowLeft className="WorkFooterLink__arrow" />
          Previous
        </span>
        <span className="WorkFooterLink__name">{WORK_ITEMS[previous].title}</span>
      </StyledLink>
    );
  }
}

function Next({ next }: { next?: string }) {
  if (next) {
    return (
      <StyledLink href={`${AppPath.Work}/${next}`}>
        <span className="WorkFooterLink__type">
          Next <ArrowRight className="WorkFooterLink__arrow" />
        </span>
        <span className="WorkFooterLink__name">{WORK_ITEMS[next]?.title}</span>
      </StyledLink>
    );
  }
}

const StyledWorkFooter = styled.div`
  display: flex;
  margin: ${padding.xl3} 0 0;
  border-top: 1px solid ${palette.border.light};

  [data-theme='dark'] & {
    border-color: ${palette.border.dark};
  }
`;

export function WorkFooter({ url }: { url: string }) {
  const workItems = Object.entries(WORK_ITEMS);
  const currentIndex = workItems.findIndex(([key]) => key === url);

  const previous = workItems[currentIndex - 1]?.[0];
  const next = workItems[currentIndex + 1]?.[0];

  if (!isNullOrUndefined(previous) || !isNullOrUndefined(next)) {
    return (
      <StyledWorkFooter>
        <Previous previous={previous} />
        <Next next={next} />
      </StyledWorkFooter>
    );
  }
}
