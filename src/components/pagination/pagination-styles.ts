import styled from 'styled-components';
import { buttonStyle } from '../../styles/button';

export const StyledPagination = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: left;
  column-gap: 8px;
  margin: 0;
  padding: 0;
  list-style: none;
`;

type ButtonProps = {
  'data-active': boolean;
};

export const StyledButton = styled.button<ButtonProps>`
  ${buttonStyle}
  padding-block: 8px;
  border: 2px solid ${({ theme }) => theme.colors.border};

  &[data-active='true'] {
    background-color: ${({ theme }) => theme.colors.backgroundAccentShadow};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.backgroundAccentShadow};
    border-color: ${({ theme }) => theme.colors.border};
  }

  &:active:not([disabled]) {
    background-color: ${({ theme }) => theme.colors.border};
  }

  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.border};
    box-shadow: 0 0 3px 1px ${({ theme }) => theme.colors.border};
  }
`;

export const StyledThreeDots = styled.span`
  ${buttonStyle}
  position: relative;
  display: inline-block;
  padding-block: 8px;
  cursor: none;
  border: 2px solid ${({ theme }) => theme.colors.border};
  line-height: 1.1;

  &::after {
    content: '...';
    position: relative;
  }
`;
