import { css } from 'styled-components';

export const buttonStyle = css`
  padding-inline: 12px;
  background-color: transparent;
  border: none;
  border-radius: 10px;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  transition: all 0.2s ease-in-out;

  &:hover,
  &:active,
  &:focus,
  &:focus-visible {
    outline: none;
  }

  &:disabled {
    cursor: not-allowed;
  }
  svg {
    transition: all 0.2s ease-in-out;
  }
`;
